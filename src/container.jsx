import React, { useRef, useState, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import Accordion from "./components/accordion";
import Button from "@mui/material/Button";
import SkeletonImage from "./assets/skeleton_image.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkIcon from "@mui/icons-material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TikTokIcon from "./assets/TikTokIcon.png";
import SnapchatIcon from "./assets/SnapchatIcon.png";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";
import SelectOptions from "./components/select";
import TextField from "@mui/material/TextField";
import ColorSelectorModal from "./components/colorSelector";

const Label = ({ isActive, style }) => {
  if (isActive === 0) {
    return <h1 className={style}>Enter URL/Link:</h1>;
  } else if (isActive === 8) {
    return <h1 className={style}>Enter Phone Number:</h1>;
  } else {
    return <h1 className={style}>Enter Username:</h1>;
  }
  return null;
};

const socialMedia = [
  { title: "URL", url: "", icon: LinkIcon },
  { title: "Facebook", url: "https://www.facebook.com/", icon: FacebookIcon },
  {
    title: "Instagram",
    url: "https://www.instagram.com/",
    icon: InstagramIcon,
  },
  { title: "Twitter/X", url: "https://x.com/", icon: XIcon },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/",
    icon: LinkedInIcon,
  },
  { title: "TikTok", url: "https://www.tiktok.com/@", icon: TikTokIcon },
  { title: "YouTube", url: "https://www.youtube.com/", icon: YouTubeIcon },
  {
    title: "Snapchat",
    url: "https://www.snapchat.com/add/",
    icon: SnapchatIcon,
  },
  { title: "WhatsApp", url: "https://wa.me/", icon: WhatsAppIcon },
  { title: "Telegram", url: "https://t.me/", icon: TelegramIcon },
];

const Container = () => {
  const [url, setUrl] = useState("");
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(0);
  const [customDotsColor, setCustomDotsColor] = useState("#000000");
  const [customBgColor, setCustomBgColor] = useState("#FFFFFF");
  const [Selected, setSelected] = useState(0);
  const [dotsStyle, setDotsStyle] = useState("Rounded");
  const [colorSelectorOpen, setColorSelectorOpen] = useState(0);
  const [height, setHeight] = useState(199);
  const [width, setWidth] = useState(199);
  const [errorMsg, setErrorMsg] = useState("");
  const [isQrVisible, setIsQrVisible] = useState(false);
  const [isScreenMd, setIsScreenMd] = useState(window.innerWidth < 1024);

  const checkScreenSize = () => {
    setIsScreenMd(window.innerWidth < 1024);
  };
  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    console.log("isScreenMd:", isScreenMd);
    console.log("is QR Visible", isQrVisible);
  }, [isScreenMd, isQrVisible]);
  useEffect(() => {
    if (!isScreenMd) {
      setIsQrVisible(false);
    }
  }, [isScreenMd]);

  const qrCode = useRef(
    new QRCodeStyling({
      width: width,
      height: height,
      backgroundOptions: {
        color: customBgColor,
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 5,
      },
      dotsOptions: {
        color: customDotsColor,
        type: dotsStyle,
      },
    })
  );

  useEffect(() => {
    if (qrCode.current && ref.current) {
      if (url) {
        qrCode.current.update({
          dotsOptions: {
            color: customDotsColor,
            type: dotsStyle.toLowerCase(),
          },
          backgroundOptions: {
            color: customBgColor,
          },

          height: height,
          width: width,
          data: url,
        });
        qrCode.current.append(ref.current);
        ref.current.style.backgroundImage = "none";
      } else {
        ref.current.innerHTML = "";
        ref.current.style.backgroundImage = `url(${SkeletonImage})`;
        ref.current.style.backgroundSize = "contain";
        ref.current.style.backgroundPosition = "center";
        ref.current.style.backgroundRepeat = "no-repeat";
      }
    }
  }, [
    url,
    customDotsColor,
    customBgColor,
    dotsStyle,
    height,
    width,
    isQrVisible,
  ]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const handleClick = (btn) => {
    if (btn === Selected) {
      setSelected(0);
      setColorSelectorOpen(0);
    } else {
      setSelected(btn);
    }
  };
  const handleDownload = () => {
    qrCode.current.download({
      extension: "png",
    });
  };
  const handleSelect = (e) => {
    setDotsStyle(e.target.value);
  };
  const handleHeight = (e) => {
    let value = e.target.value;
    if (value > 200) {
      setErrorMsg("Max Value is reached.");
      value = 200;
    } else {
      setErrorMsg("");
    }
    setHeight(value);
  };
  const handleWidth = (e) => {
    let value = e.target.value;
    if (value > 200) {
      setErrorMsg("Max Value is reached.");
      value = 200;
    } else {
      setErrorMsg("");
    }
    setWidth(value);
  };
  const openColorSelector = (i) => {
    if (i === colorSelectorOpen) {
      setColorSelectorOpen(0);
    } else {
      setColorSelectorOpen(i);
    }
  };

  return (
    <>
      <div className="h-full flex flex-col  justify-center items-center mt-5">
        <div className="flex lg:flex-row xs:flex-col justify-between w-5/6  h-5/6 rounded-3xl bg-white shadow-[0_5px_20px_rgba(10,10,10,0.3)]">
          {((isScreenMd && !isQrVisible) || !isScreenMd) && (
            <div className="lg:w-2/3 h-full p-5 ">
              <div className="w-full h-full flex flex-col  border-2 border-[#C2CED2] rounded-t-2xl">
                <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2">
                  {socialMedia.map(({ title, url, icon }, index) => {
                    return (
                      <Button
                        key={index}
                        onClick={() => {
                          setIsActive(index);
                          setUrl(url);
                        }}
                        sx={{
                          gap: "4px",
                          fontSize: {
                            xs: "0.75rem",
                            md: "0.875rem",
                          },
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          pt: "8px",
                          borderBottom: "1px solid #9CA3AF",
                          borderRadius: "15px 15px 0px 0px",
                          cursor: "pointer",
                          transition: "all 0.2s",
                          backgroundColor:
                            isActive === index ? "#E5E7EB" : "transparent",
                          color: isActive ? "#1E2952" : "#6B7280",
                          "&:hover": {
                            backgroundColor: "#F3F4F6",
                            color: "#374151",
                          },
                          "&:active": {
                            backgroundColor: "#E5E7EB",
                            color: "#111827",
                          },
                        }}
                      >
                        {typeof icon === "string" ? (
                          <img className="xs:w-[20px]" src={icon} alt={title} />
                        ) : (
                          React.createElement(icon, {
                            sx: { fontSize: 20, color: "#374151" },
                          })
                        )}
                        {title}
                      </Button>
                    );
                  })}
                </div>
                <Label
                  isActive={isActive}
                  style={
                    "font-bold xl:mt-10 xs:mt-5 ml-5 mb-2 md:text-xl xs:text-lg"
                  }
                />
                <div className=" w-full h-full">
                  <textarea
                    className=" pl-5 pt-0 focus:outline-0 w-full h-full resize-none placeholder:font-bold xs:placeholder:text-sm sm:placeholder:text-base md:placeholder:text-lg placeholder:text-[#909090]"
                    placeholder={`Enter a URL/Link here\n(Your QR Code will be generated automatically)`}
                    value={url}
                    onChange={onUrlChange}
                  />
                </div>
                {isScreenMd && (
                  <Button
                    sx={{
                      borderTop: "1px solid #99A1AF",
                      color: "black",
                      fontWeight: "bold",
                      borderRadius: "0px",
                    }}
                    onClick={() => setIsQrVisible(!isQrVisible)}
                    disabled={!url.trim()}
                  >
                    Generate QR Code
                  </Button>
                )}
              </div>
            </div>
          )}
          {((isScreenMd && isQrVisible) || !isScreenMd) && (
            <div className="lg:w-1/3 lg:my-10 lg:flex lg:border-l-2 lg:border-l-[#C2CED2] lg:flex-col h-dvh  items-center ">
              <div className="flex justify-center flex-col ">
                <div
                  className="relative mx-2 mb-2 flex self-center justify-center p-2 min-h-[210px] w-[210px] "
                  ref={ref}
                ></div>
                <button
                  class="relative mx-5 self-center max-w-[186px] min-w-[186px] min-h-[40px] mb-4 cursor-pointer flex items-center border border-[#9CA3AF]  overflow-hidden transition-all duration-300 group"
                  onClick={handleDownload}
                >
                  <span class="translate-x-[40px] text-[#374151] font-semibold transition-all duration-300 group-hover:text-transparent text-center">
                    Download
                  </span>
                  <span class="absolute translate-x-[144px] h-full w-[40px] bg-[#d7e2ff] flex items-center justify-center transition-all duration-300 group-hover:w-full group-hover:translate-x-0 group-active:bg-[#e2e2ff] ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 35 35"
                      class="w-[20px] fill-[#374151]"
                    >
                      <path d="M17.5,22.131a1.249,1.249,0,0,1-1.25-1.25V2.187a1.25,1.25,0,0,1,2.5,0V20.881A1.25,1.25,0,0,1,17.5,22.131Z"></path>
                      <path d="M17.5,22.693a3.189,3.189,0,0,1-2.262-.936L8.487,15.006a1.249,1.249,0,0,1,1.767-1.767l6.751,6.751a.7.7,0,0,0,.99,0l6.751-6.751a1.25,1.25,0,0,1,1.768,1.767l-6.752,6.751A3.191,3.191,0,0,1,17.5,22.693Z"></path>
                      <path d="M31.436,34.063H3.564A3.318,3.318,0,0,1,.25,30.749V22.011a1.25,1.25,0,0,1,2.5,0v8.738a.815.815,0,0,0,.814.814H31.436a.815.815,0,0,0,.814-.814V22.011a1.25,1.25,0,1,1,2.5,0v8.738A3.318,3.318,0,0,1,31.436,34.063Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
              <div className="flex flex-col w-full lg:mx-2 xs">
                <div className="accordion-container">
                  <Accordion
                    title={"SIZE"}
                    handleClick={() => handleClick(1)}
                    Selected={Selected === 1}
                  />
                  <div
                    id="panel"
                    className={
                      Selected === 1
                        ? "lg:h-24 lg:py-2 h-20 overflow-auto"
                        : "h-0"
                    }
                  >
                    <div className="flex flex-row mr-5">
                      <TextField
                        aria-hidden="true"
                        type="number"
                        sx={{
                          mr: 2,
                          mt: 2,
                        }}
                        id="outlined-basic"
                        label="Height"
                        variant="outlined"
                        value={height}
                        onChange={handleHeight}
                      />

                      <TextField
                        type="number"
                        sx={{
                          mt: 2,
                        }}
                        aria-hidden="true"
                        id="outlined-basic"
                        label="Width"
                        value={width}
                        variant="outlined"
                        onChange={handleWidth}
                      />
                    </div>
                    <p className="text-xs m-0 text-red-600 text-center">
                      {errorMsg}
                    </p>
                  </div>
                </div>
                <div className="accordion-container ">
                  <Accordion
                    title={"SHAPE & COLOR"}
                    handleClick={() => handleClick(2)}
                    Selected={Selected === 2}
                  />
                  <div
                    id="panel"
                    className={
                      Selected === 2
                        ? "lg:h-48 h-44 lg:py-2 overflow-auto"
                        : "h-0"
                    }
                  >
                    <SelectOptions
                      aria-hidden="true"
                      value={dotsStyle}
                      title="Dots"
                      options={[
                        "Rounded",
                        "Dots",
                        "Classy",
                        "Classy-Rounded",
                        "Square",
                        "Extra-Rounded",
                      ]}
                      handleSelect={handleSelect}
                    />

                    <div className=" flex flex-col gap-2 my-2">
                      <div className="color-btn-container ">
                        <p>Dots Color: </p>
                        <button
                          tabIndex="-1"
                          className={`color-btn`}
                          style={{ backgroundColor: customDotsColor }}
                          onClick={() => openColorSelector(2)}
                        >
                          <span className=" ">+</span>
                        </button>
                      </div>
                    </div>
                    <div className=" flex flex-col gap-2">
                      <div className="color-btn-container my-2 ">
                        <p>Background Color: </p>
                        <button
                          tabIndex="-1"
                          className={`color-btn `}
                          style={{ backgroundColor: customBgColor }}
                          onClick={() => openColorSelector(1)}
                        >
                          <span className=" ">+</span>
                        </button>
                      </div>
                    </div>
                    {colorSelectorOpen === 1 ? (
                      <ColorSelectorModal
                        customColor={customBgColor}
                        setCustomColor={setCustomBgColor}
                      />
                    ) : colorSelectorOpen === 2 ? (
                      <ColorSelectorModal
                        customColor={customDotsColor}
                        setCustomColor={setCustomDotsColor}
                      />
                    ) : null}
                  </div>
                </div>
                {isScreenMd && (
                  <Button
                    sx={{
                      borderTop: "1px solid #99A1AF",
                      borderBottom: "1px solid #99A1AF",
                      color: "black",
                      fontWeight: "bold",
                      borderRadius: "0px",
                    }}
                    onClick={() => setIsQrVisible(!isQrVisible)}
                  >
                    Go back
                  </Button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Container;
