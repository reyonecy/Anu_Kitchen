import React from "react";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="bg-[#1E1E1E] scroll-mt-20 " id="menu -mt-6">
      <p className="text-center  text-4xl mt-6 tracking-wider font-montserrat">
        MENU
      </p>
      <div className="flex mt-7">
        <div>
          <img src="/images/Menu.jpg" alt="menu1" />
        </div>
        <div>
          <img src="/images/Menu2.jpg" alt="menu2" />
        </div>
      </div>
      <div className="w-30">
        <img src="/images/Menu3.jpg" alt="menu3" />
      </div>
    </div>
  );
};

export default Menu;
