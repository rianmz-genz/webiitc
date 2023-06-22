import Button from '@/components/atoms/Button';
import Logo from '@/components/atoms/Logo';
import Text from '@/components/atoms/Text';
import Container from '@/components/molecules/Container';
import NavLink from '@/components/molecules/NavLink';
import React from 'react';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="w-full bg-darkblue">
      <Container>
        <footer className="w-full pt-12 pb-5 md:pb-16 bg-darkblue flex justify-center items-center flex-col">
          <div className="w-11/12 flex flex-col md:flex-row justify-start md:justify-between items-center border-b pb-12 border-[#71777D]">
            {/* left side */}
            <div className="space-y-5 md:w-6/12 text-center md:text-start">
              <Logo>IITC</Logo>
              <Text additionals={'md:w-6/12'} size={'small'} color={'white'}>
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
              <div className="flex space-x-2 my-5 md:my-0 text-white items-center justify-center md:justify-start">
                <AiOutlineMail />
                <Text color={'white'} size={'small'}>
                  adminiitc@gmail.com
                </Text>
                <AiOutlinePhone />
                <Text color={'white'} size={'small'}>
                  +6288177162
                </Text>
              </div>
            </div>
            {/* right side */}
            <form className="flex justify-center items-end md:w-6/12 px-10 flex-col space-y-2 mt-5 md:mt-0">
              <label className="flex space-y-2 flex-col">
                <Text
                  size={'description'}
                  color={'white'}
                  additionals={'hidden md:block'}
                >
                  Get the freshest news from us
                </Text>
                <div className="flex items-center justify-center md:justify-start lg:space-x-3 flex-wrap gap-3">
                  <input
                    type="text"
                    placeholder="your email address"
                    className="bg-white px-2 py-2 rounded-md focus:outline-none text-sm"
                  />
                  <Button isSquare color={'oren'} size={'md'}>
                    Subscribe
                  </Button>
                </div>
              </label>
            </form>
          </div>
          {/* bottom */}
          <div className="w-11/12 flex  justify-between mt-6 lg:flex-row text-[#92989F] items-center flex-col">
            <ul className="flex space-x-4 items-center">
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
            </ul>
            <p className="text-xs my-10 md:text-md">
              Develop with love © Intermedia 2023. All right reserved
            </p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
