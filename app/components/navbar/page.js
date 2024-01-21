"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed left-0 right-0 bg-[#1E1E1E] px-5 flex items-center justify-between">
      <div className="">
        <Image alt="logo" src="/logo.png" width={100} height={100} />
      </div>
      <div className="items-center flex justify-around w-1/2">
        <div className=" flex justify-evenly w-2/3 ">
          <Link href="">HOME</Link>
          <Link href="">MENU</Link>
          <Link href="">ABOUT US</Link>
          <Link href="">CONTACT US</Link>
          <Link href="">BOOKING</Link>
        </div>
        <div className="items-center w-1/4 flex justify-around">
          {/* <FaSearch /> */}
          <button className="bg-[#FF9E0B] px-4 py-1 ">ENQUIRY</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
