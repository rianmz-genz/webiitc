import Button from "@/components/atoms/Button";
import Logo from "@/components/atoms/Logo";
import NavItem from "@/components/molecules/NavItem";
import NavLink from "@/components/molecules/NavLink";
import Link from "next/link";
import React, { useState } from "react";
import { FiX, FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="w-11/12 mx-auto absolute z-30 top-6 bg-transparent  rounded-full p-2">
      <nav
        className="flex justify-between text-white items-center"
        itemScope
        itemType="https://schema.org/SiteNavigationElement"
      >
        <Logo>IITC</Logo>
        <NavItem show={isMenuOpen}>
          <NavLink target="#hero">Home</NavLink>
          <NavLink target="#about">About</NavLink>
          <NavLink target="#skema">Skema</NavLink>
          <NavLink target="#lomba">Lomba</NavLink>
          <NavLink target="#timeline">Timeline</NavLink>
          <NavLink target="#faq">FAQ</NavLink>
        </NavItem>
        <Link href={'/signup'}>
            <Button>Daftar</Button>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;