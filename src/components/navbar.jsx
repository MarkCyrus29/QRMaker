import React from "react";

const Navbar = () => {
  return (
    <nav className=" fixed lg:mt-5 mt-2 ">
      <h1 className="font-bold text-2xl backdrop-blur-xs  p-2">
        QR Code Maker
      </h1>
      <a
        className="ml-2"
        href="https://github.com/MarkCyrus29/QRMaker"
        target="_blank"
      >
        Github
      </a>
    </nav>
  );
};

export default Navbar;
