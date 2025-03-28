import React, { useRef, useState, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";
import ColorSelector from "react-color-selector";
import DropdownToggle from "./dropdown";

const qrCode = new QRCodeStyling({
  image: null,
  height: 200,
  width: 200,
  dotsOptions: {
    color: "#090909",
    type: "rounded",
  },
  imageOptions: {
    crossOrigin: "anonymous",
    margin: 20,
  },
});
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
  const [url, setUrl] = useState("https://github.com/MarkCyrus29/QRMaker");
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(0);
  const [color, setColor] = useState("#000000");
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

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center mt-10  ">
        <div className="flex justify-between w-5/6 h-5/6 rounded-3xl bg-white shadow-[0_5px_20px_rgba(10,10,10,0.3)]">
          <div className="w-2/3 h-full flex flex-col p-5">
            <div className="grid grid-cols-5">
              {socialMedia.map(({ title, url }, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => {
                      setIsActive(index);
                      setUrl(url);
                    }}
                    className={`m-2 pt-2 rounded-t-xl border-b p-1 border-b-gray-400 cursor-pointer transition-all hover:bg-gray-100 active:bg-gray-200 ${
                      isActive === index ? `bg-gray-200` : ""
                    }`}
                  >
                    {title}
                  </button>
                );
              })}
            </div>
            <Label isActive={isActive} style={"font-bold m-5 mb-2"} />
            <div className=" w-full h-full">
              <textarea
                className=" p-5 pt-0 focus:outline-0 w-full h-full resize-none"
                placeholder="..."
                value={url}
                onChange={onUrlChange}
              />
            </div>
          </div>
          <div className="w-1/3 my-10  border-l-2 border-l-[#C2CED2] flex flex-col items-center ">
            <p className="font-bold text-3xl mt-5 mb-1">QR CODE</p>
            <div
              className="m-2 mt-0 flex justify-center p-2  h-[210px] w-[210px]"
              ref={ref}
            ></div>
            <div className="flex flex-col w-full mx-2">
              <button className="btn  peer">
                <p>FRAME</p>
                {<DropdownToggle />}
              </button>
              <button className="btn  peer">
                <p>SHAPE & COLOR</p>
                {<DropdownToggle />}
              </button>
              <button className="btn  peer">
                <p>LOGO</p>
                {<DropdownToggle />}
              </button>
            </div>
            {/* <ColorSelector pallet={picker_data} selectedColor={setColor} />
            <p>{color}</p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
