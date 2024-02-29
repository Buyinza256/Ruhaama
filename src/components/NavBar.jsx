import React from "react";
import img_logo from "../assets/logos/LOGO RSS.jpg  5.png";


const NavBar = () => {
  return (
    <nav className="text-2xl font-medium flex gap-4 w-full justify-between">
      <div className="px-2">
         <img
              className="inline shadow-lg shadow-indigo-500/50"
              src={img_logo}
              alt="..."
              style={{width: 50}}
            />
      </div>
      <ul className="flex gap-12 text-white">
        <li className=" duration-300 transition ease-in delay-150 hover:underline cursor-pointer">Home</li>
        <li className=" duration-300 transition ease-in delay-150 hover:underline cursor-pointer">About</li>
        <li className=" duration-300 transition ease-in delay-150 hover:underline cursor-pointer">Contact Us</li>
        <li className=" duration-300 transition ease-in delay-150 hover:underline cursor-pointer">Documents</li>
      </ul>
    </nav>
  );
};

export default NavBar;
