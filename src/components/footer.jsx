import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-[#090909]">
      <div className="h-12 w-5/6 flex justify-around  items-center flex-row  text-white ">
        <p className="xs:text-xs md:text-base">@2025. All rights reserved</p>
        <div className="flex flex-row md:gap-2 xs:gap-0.5">
          <a
            className="icon"
            href="https://www.linkedin.com/in/markcyrus-serrano/"
            target="_blank"
          >
            <LinkedInIcon
              sx={{
                height: {
                  xs: 20,
                  md: 25,
                },
              }}
            />
          </a>
          <a
            className="icon"
            href="https://github.com/MarkCyrus29"
            target="_blank"
          >
            <GitHubIcon
              sx={{
                height: {
                  xs: 20,
                  md: 25,
                },
              }}
            />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/cyrus.srrn/"
            target="_blank"
          >
            <InstagramIcon
              sx={{
                height: {
                  xs: 20,
                  md: 25,
                },
              }}
            />
          </a>
          <a className="icon" href="https://t.me/cyrus_srrn" target="_blank">
            <TelegramIcon
              sx={{
                height: {
                  xs: 20,
                  md: 25,
                },
              }}
            />
          </a>
        </div>
        <div>
          <p className="xs:text-xs">
            <span className="xs:hidden md:inline">Made by: </span>
            <span className="md:text-base xs:text-xs text-[#5D275D] font-bold">
              Cyr
            </span>
            <span className="md:text-base xs:text-xs ">.us</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
