import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="flex justify-between bg-[#1E1E1E] h-48 items-center px-14 border border-inherit"
      id="menu"
    >
      <div>
        <div className="ml-2 font-mada">
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
      <div className="gap-y-2 flex flex-col text-lg font-mada tracking-widest">
        {/* <iframe
          className="-mt-64 invisible "
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6622.072856766216!2d151.1022526058044!3d-33.9144619999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bb2eb30372f5%3A0xcc5defad67b91410!2sAnu%20Kitchen%20and%20Catering%20Services!5e0!3m2!1sne!2snp!4v1706775208180!5m2!1sne!2snp"
          width="500"
          height="250"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe> */}
        <p className="cursor-pointer iframe-hover:visible">
          Address: The Peak Campsie, 337 Beamish Street
        </p>

        <p>Contact no: 0451490788</p>
        <p>Email: anukitchen@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
