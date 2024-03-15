import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import img_logo from "../assets/logos/school_logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between items-center">
          <div className="px-2">
            <img
              className="inline shadow-lg shadow-indigo-500/50"
              src={img_logo}
              alt="..."
              style={{ width: 50 }}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <ul className="lg:flex">
            <li>Home</li>
            <li>Students</li>
            <li>About</li>
            <li>Background</li>
            <li>Contact</li>
          </ul>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
