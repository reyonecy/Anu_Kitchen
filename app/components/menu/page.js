import React from "react";
import Image from "next/image";

const Menu=()=>{
    return(
        <div>
            {/* <div>
                <Image
                    src="/foodphoto.jpg"
                    width={550}
                    height={740}
                    alt="foodphoto"
                />
            </div>
            <div>
                <p>OUR SPECIAL</p>
                <p>Chicken Chhoila</p>
            </div> */}
            <p className="text-center text-4xl mt-5">MENU</p>
            <div className="flex mt-5">
                <div>
                    <img src="/Menu.jpg" alt="menu1"/>
                </div>
                <div>
                    <img src="/Menu2.jpg" alt="menu2"/>
                </div>
        </div>
        <div className="w-30">
            <img src="/Menu3.jpg" alt="menu3"/>
        </div>
        </div>
        
    );
}

export default Menu;