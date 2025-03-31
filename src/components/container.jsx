import React, { useRef, useState, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import ColorSelector from "react-color-selector";
import Accordion from "./accordion";
import Button from "@mui/material/Button";

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

  const qrCode = new QRCodeStyling({
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
  });
  const picker_data = {
    col: 12,
    row: 12,
    width: 300,
    height: 250,
    view: "both",
    theme: "dark",
    title: "COLORS",
    cellControl: 4,
  };

  useEffect(() => {
    qrCode.append(ref.current);
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url,
    });
  }, [url]);

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
    const panel = document.getElementsByClassName("panel");
    console.log(panel[btn]);
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
                        borderRadius: "16px 16px 0px 0px",
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
                  className=" pl-5 pt-0 focus:outline-0 w-full h-full resize-none placeholder:font-bold placeholder:text-lg"
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
              className="m-2 mt-0 flex justify-center p-2  h-[210px] w-[210px]"
              ref={ref}
            ></div>
            <div className="flex flex-col w-full mx-2">
              <Accordion title={"FRAME"} handleClick={() => handleClick(0)} />
              <div className="panel hidden ">FRAME PANEL</div>
              <Accordion
                title={"SHAPE & COLOR"}
                handleClick={() => handleClick(1)}
              />
              <div className="panel hidden">SHAPES PANEL</div>
              <Accordion title={"LOGO"} handleClick={() => handleClick(2)} />
              <div className="panel hidden">
                LOGO PANEL{" "}
                <ColorSelector
                  pallet={picker_data}
                  selectedColor={setCustomColor}
                />
                <p>{customColor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
