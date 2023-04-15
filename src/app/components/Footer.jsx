import Image from "next/image";
import React from "react";
import logo from "../../../public/logo2.png";

function Footer() {
  return (
    <div className="footer bg-[#090909] text-[#f5f5f5] p-10 lg:p-16">
      <div className="footer_logo flex flex-col lg:flex-row w-full">
        <div className="w-1/2">
          <Image src={logo} width={50} height={50} alt="footer-logo"></Image>
          <p className="mt-4">
            The ZAT Project is a crypto project with a clear vision as its
            driving factor.
          </p>
        </div>

        <div className="w-1/2 flex lg:flex-row flex-col justify-evenly">
          <div>
            <h4 className="text-[#62CDFF] text-[24px] font-[700] mb-4">
              Social
            </h4>
            <ul className="flex flex-col gap-1">
              <a href="https://t.me/Zatproject" target="_blank">
                <li>Telegram</li>
              </a>
              <a
                href="https://twitter.com/ZPROToken"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Twitter</li>
              </a>
              <a
                href="https://t.me/ZatProjectOfficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Instagram</li>
              </a>
              <a
                href="https://www.reddit.com/r/zatprojectOfficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li>Reddit</li>
              </a>
            </ul>
          </div>
          <div>
            <h4 className="text-[#62CDFF] text-[24px] font-[700] mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-1">
              <li>
                <a href="#faq">About</a>
              </li>
              <li>
                <a href="#partner">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
