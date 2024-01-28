import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between bg-[#1E1E1E] h-48 items-center px-14">
      <div>
        <div className="ml-2">
          <h2 className=" text-2xl font-bold tracking-widest">
            <span className="ml-10 text-4xl">Anu Kitchen</span> <br />
            and Catering Services
          </h2>
        </div>
        <div className="my-4 flex justify-evenly">
          <Link
            target="blank"
            href="https://www.instagram.com/anu_kitchen_catering_services/ "
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            target="blank"
            href="https://www.facebook.com/profile.php?id=100064216985064"
          >
            <FaFacebookSquare size={30} />
          </Link>
          <Link target="blank" href="https://www.tiktok.com/@stopper63">
            <FaTiktok size={30} />
          </Link>
        </div>
      </div>
      <div className="gap-y-2 flex flex-col text-lg">
        <p>Address: The Peak Campsie 337 Beamish Street</p>
        <p>Contact no: 0451490788</p>
        <p>Email: anukitchen@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
