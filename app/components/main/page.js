import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trirong } from "next/font/google";

const Main = () => {
  return (
    <div>
      <div className="bg-[url('/images/home.png')] w-full h-screen bg-center bg-cover gap-2 flex flex-col justify-center items-center">
        <p className="text-xl font-light font-sans tracking-widest">
          Welcome to our delicious corner {""}
        </p>
        <h1 className="text-4xl font-bold font-montserrat tracking-widest">
          ANU KITCHEN AND CATERING SERVICES
        </h1>
        {/* <button className="bg-[#FF9E0B] px-4 py-2 rounded-md mt-6">MENU</button> */}
        <Link
          href="#menu"
          className="bg-[#FF9E0B]  hover:bg-[#FF9E0B] hover:bg-opacity-50 hover:font-medium hover:tracking-wide px-4 py-2 rounded-md mt-6 text-white transition duration-300 ease-in-out"
        >
          MENU
        </Link>
      </div>
    </div>

    // </div>
  );
};

export default Main;
