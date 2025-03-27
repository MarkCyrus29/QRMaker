import React, { useRef, useState, useEffect } from "react";
import QRCodeStyling from "qr-code-styling";

const qrCode = new QRCodeStyling({
  image: null,
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
    return <h1 className={style}>Enter URL:</h1>;
  } else if (isActive === 8) {
    return <h1 className={style}>Enter Phone Number:</h1>;
  } else {
    return <h1 className={style}>Enter Username:</h1>;
  }
  return null;
};
const Container = () => {
  const [url, setUrl] = useState("https://github.com/MarkCyrus29");
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(0);

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
    { title: "URL", url: "https://github.com/MarkCyrus29" },
    { title: "Facebook", url: "https://www.facebook.com/" },
    { title: "Instagram", url: "https://www.instagram.com/" },
    { title: "Twitter/X", url: "https://twitter.com/" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/" },
    { title: "TikTok", url: "https://www.tiktok.com/@" },
    { title: "YouTube", url: "https://www.youtube.com/c/" },
    { title: "Snapchat", url: "https://www.snapchat.com/add/" },
    { title: "WhatsApp", url: "https://wa.me/" },
    { title: "Telegram", url: "https://t.me/" },
  ];

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center mt-5">
        <div className="flex justify-between w-5/6 h-5/6 border border-gray-600 rounded-3xl">
          <div className="w-2/3 h-full flex flex-col">
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
                value={url}
                onChange={onUrlChange}
              />
            </div>
          </div>
          <div className="w-1/3 border-l border-l-gray-600 flex flex-col items-center justify-center">
            <p className="font-bold">QR CODE</p>
            <div
              className="m-2 mt-0 flex justify-center h-[310px] w-[310px] border"
              ref={ref}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
