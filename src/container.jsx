import React, { useRef, useState, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import ColorSelector from "react-color-selector";
import Accordion from "./components/accordion";
import Button from "@mui/material/Button";
import SkeletonImage from "./assets/skeleton_image.png";

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

const Container = () => {
  const [url, setUrl] = useState("");
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(0);
  const [customColor, setCustomColor] = useState("#000000");
  const [isOpen, setIsOpen] = useState(0);
  const [height, setHeight] = useState("0px");

  const qrCode = useRef(
    new QRCodeStyling({
      image: null,
      height: 200,
      width: 200,
      dotsOptions: {
        color: customColor,
        type: "rounded",
      },
      imageOptions: {
        crossOrigin: "anonymous",
        margin: 20,
      },
    })
  );

  const picker_data = {
    col: 12,
    row: 12,
    width: 250,
    height: 200,
    view: "both",
    theme: "light",
    title: "COLORS",
  };

  useEffect(() => {
    if (qrCode.current && ref.current) {
      if (url) {
        qrCode.current.update({
          dotsOptions: { color: customColor },
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
  }, [url, customColor]);

  const onUrlChange = (event) => {
    event.preventDefault();
    setUrl(event.target.value);
  };
  const socialMedia = [
    { title: "URL", url: "" },
    { title: "Facebook", url: "https://www.facebook.com/" },
    { title: "Instagram", url: "https://www.instagram.com/" },
    { title: "Twitter/X", url: "https://twitter.com/" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/" },
    { title: "TikTok", url: "https://www.tiktok.com/@" },
    { title: "YouTube", url: "https://www.youtube.com/" },
    { title: "Snapchat", url: "https://www.snapchat.com/add/" },
    { title: "WhatsApp", url: "https://wa.me/" },
    { title: "Telegram", url: "https://t.me/" },
  ];

  const handleClick = (btn) => {
    setIsOpen(btn);
  };
  const handleDownload = () => {
    qrCode.current.download({
      extension: "png",
    });
  };

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center mt-10">
        <div className="flex justify-between w-5/6 h-5/6 rounded-3xl bg-white shadow-[0_5px_20px_rgba(10,10,10,0.3)]">
          <div className="w-2/3 h-full p-5 ">
            <div className="w-full h-full flex flex-col border border-[#9CA3AF] rounded-t-2xl">
              <div className="grid grid-cols-5">
                {socialMedia.map(({ title, url }, index) => {
                  return (
                    <Button
                      key={index}
                      onClick={() => {
                        setIsActive(index);
                        setUrl(url);
                      }}
                      sx={{
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
                      {title}
                    </Button>
                  );
                })}
              </div>
              <Label
                isActive={isActive}
                style={"font-bold mt-10 ml-5 mb-2 text-xl"}
              />
              <div className=" w-full h-full">
                <textarea
                  className=" pl-5 pt-0 focus:outline-0 w-full h-full resize-none placeholder:font-bold placeholder:text-lg placeholder:text-[#909090]"
                  placeholder={`Enter a URL/Link here\n(Your QR Code will be generated automatically)`}
                  value={url}
                  onChange={onUrlChange}
                />
              </div>
            </div>
          </div>
          <div className="w-1/3 my-10  border-l-2 border-l-[#C2CED2] flex flex-col items-center ">
            <p className="font-bold text-3xl mt-5 mb-1">QR CODE</p>

            <div
              className="relative mx-2 flex justify-center p-2 h-[210px] w-[210px] "
              ref={ref}
            ></div>

            <button
              class="relative w-[150px] h-[40px] mb-2 cursor-pointer flex items-center border border-[#9CA3AF]  overflow-hidden transition-all duration-300 group"
              onClick={handleDownload}
            >
              <span class="translate-x-[22px] text-[#374151] font-semibold transition-all duration-300 group-hover:text-transparent">
                Download
              </span>
              <span class="absolute translate-x-[109px] h-full w-[40px] bg-[#f4f7ff] flex items-center justify-center transition-all duration-300 group-hover:w-full group-hover:translate-x-0">
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

            <div className="flex flex-col w-full mx-2">
              <Accordion title={"FRAME"} handleClick={() => handleClick(0)} />

              <div style={{ maxHeight: height, opacity: 0 }}>FRAME PANEL</div>
              <Accordion
                title={"SHAPE & COLOR"}
                handleClick={() => handleClick(1)}
              />
              <div style={{ maxHeight: height, opacity: 0 }}>
                <ColorSelector
                  pallet={picker_data}
                  selectedColor={setCustomColor}
                />
              </div>

              <p style={{ maxHeight: height, opacity: 0 }}>{customColor}</p>
              <div style={{ maxHeight: height, opacity: 0 }}>SHAPES PANEL</div>
              <Accordion title={"LOGO"} handleClick={() => handleClick(2)} />
              <div style={{ maxHeight: height, opacity: 0 }}>LOGO PANEL </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
