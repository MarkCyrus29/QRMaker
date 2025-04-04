import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-[#090909]">
      <div className="h-12 w-5/6 flex justify-around  items-center flex-row  text-white ">
        <div>@2025. All rights reserved</div>
        <div className="flex flex-row gap-2">
          <a
            className="icon"
            href="https://www.linkedin.com/in/markcyrus-serrano/"
            target="_blank"
          >
            <LinkedInIcon />
          </a>
          <a
            className="icon"
            href="https://github.com/MarkCyrus29"
            target="_blank"
          >
            <GitHubIcon />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/cyrus.srrn/"
            target="_blank"
          >
            <InstagramIcon />
          </a>
          <a className="icon" href="https://t.me/cyrus_srrn" target="_blank">
            <TelegramIcon />
          </a>
        </div>
        <div>
          <p>
            Made by: <strong className="text-[#5D275D] font-bold">Cyr</strong>
            .us
          </p>
        </div>
      </div>
    </footer>
  );
};
