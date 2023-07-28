import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import Text from "@/components/atoms/Text";
import Container from "@/components/molecules/Container";
import NavLink from "@/components/molecules/NavLink";
import Image from "next/image";
import React from "react";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="w-full bg-darkblue">
      <Container>
        <footer className="w-full pt-12 pb-5 md:pb-16 bg-darkblue flex justify-center items-center flex-col">
          <div className="w-11/12 flex flex-col md:flex-row justify-start md:justify-between items-center border-b pb-12 border-[#71777D]">
            {/* left side */}
            <div className="space-y-5 w-full text-center md:text-start">
              <Image
                className="w-20 p-2"
                src="/images/8.png"
                width={1080}
                height={1080}
                alt="Logo IIT Competition"
              />
              <Text additionals={"md:w-6/12"} size={"small"} color={"white"}>
                mencari generasi dengan potensi yang luar biasa pada bidang
                tertentu
              </Text>
              <ul className="flex space-x-4 justify-center md:justify-start text-xs md:text-md flex-wrap gap-2">
                <NavLink isSmall isWhite target="#hero">
                  Home
                </NavLink>
                <NavLink isSmall isWhite target="#about">
                  About
                </NavLink>
                <NavLink isSmall isWhite target="#skema">
                  Skema
                </NavLink>
                <NavLink isSmall isWhite target="#lomba">
                  Lomba
                </NavLink>
                <NavLink isSmall isWhite target="#timeline">
                  Timeline
                </NavLink>
                <NavLink isSmall isWhite target="#faq">
                  FAQ
                </NavLink>
              </ul>
              <div className="flex md:flex-row flex-col space-y-3 md:space-y-0 md:space-x-2 my-5 md:my-0 text-white items-center justify-center md:justify-start">
                <div className="flex items-center space-x-2">
                  <AiOutlineMail />
                  <Text color={"white"} size={"small"}>
                    iitc.intermedia@gmail.com
                  </Text>
                </div>
                <div className="flex items-center space-x-2">
                  <AiOutlinePhone />
                  <Text color={"white"} size={"small"}>
                    +628985485275(IITC) | +6283189827491(Fotin)
                  </Text>
                </div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="w-11/12 flex  justify-center mt-6 lg:flex-row text-[#92989F] items-center flex-col">
            {/* <ul className="flex space-x-4 items-center">
              <li className="border-none md:border-x border-[#92989F] text-xs px-3">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="boeder-none md:border-r border-[#92989F] text-xs pr-3">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="boeder-none md:border-r border-[#92989F] text-xs pr-3">
                <a href="#">Accessibility</a>
              </li>
              <li className="boeder-none md:border-r border-[#92989F] text-xs pr-3">
                <a href="#">Legal</a>
              </li>
            </ul> */}
            <p className="text-sm my-3 md:text-md">
              Develop with love © Intermedia 2023. All right reserved
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
