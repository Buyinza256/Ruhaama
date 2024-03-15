import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import img_logo from "../assets/logos/school_logo.png";

const Footer = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col px-4">
        <div className="sm:flex text-center justify-between sm:justify-center sm:p-6 items-center">
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
          <ul className="w-[45%] lg:flex sm:border-r-2">
            <li>
              {" "}
              <a href="#main-section">Home</a>
            </li>
            <li>
              {" "}
              <a href="#students">Students</a>
            </li>
            <li>
              <a href="#staff">Staff</a>
            </li>
            <li>
              {" "}
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact Us</a>
            </li>
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
