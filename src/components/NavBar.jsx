import {} from "@gsap/react";
import { Power3, TweenMax } from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import img_logo from "../assets/logos/LOGO RSS.jpg  5.png";

const NavBar = () => {
  let ref = useRef([]);
  let logoRef = useRef([]);

  const [nav, setnav] = useState(false);
  const [logo, setLogo] = useState(false);

  const handleNav = () => {
    setnav((view) => !view);
    setLogo((heading) => !heading);
  };

  useEffect(() => {
    // TweenMax.to(ref, 0.8, { opacity: 1, y: -20, ease: Power3.easeOut });
    TweenMax.to(logoRef, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
      delay: 0.5,
    });

    TweenMax.to(ref, 0.8, {
      opacity: 1,
      y: -10,
      ease: Power3.easeOut,
      delay: 0.8,
    });
  }, []);
  return (
    <nav className="text-2xl font-medium flex gap-4 w-full justify-between">
      <div className={logo ? "hidden" : "block px-2"}>
        <img
          className="inline shadow-lg shadow-indigo-500/50 opacity-0"
          ref={(el) => (logoRef = el)}
          src={img_logo}
          alt="..."
          style={{ width: 50 }}
        />
      </div>

      <ul
        className="gap-12 text-white opacity-0 hidden md:flex"
        ref={(el) => (ref = el)}
      >
        <li
          className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
          onClick={handleNav}
        >
          <a href="#main-section">Home</a>
        </li>

        <li
          className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
          onClick={handleNav}
        >
          <a href="#students">Students</a>
        </li>
        <li
          className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
          onClick={handleNav}
        >
          <a href="#staff">Staff</a>
        </li>
        <li
          className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
          onClick={handleNav}
        >
          <a href="#about">About</a>
        </li>
        <li
          className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
          onClick={handleNav}
        >
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className={`md:hidden z-10 `}>
        {nav ? (
          <AiOutlineClose
            onClick={handleNav}
            className="font-bold cursor-pointer"
          />
        ) : (
          <HiOutlineMenuAlt4
            size={20}
            onClick={handleNav}
            className="text-white font-bold cursor-pointer"
          />
        )}
      </div>

      <div
        className={
          nav
            ? "absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex-col text-black z-5"
            : ""
        }
      >
        <ul
          className={
            nav ? "mt-4 flex gap-12 text-white" : " absolute left-[-100%]"
          }
        >
          <li
            className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
            onClick={handleNav}
          >
            <a href="#main-section">Home</a>
          </li>

          <li
            className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
            onClick={handleNav}
          >
            <a href="#students">Students</a>
          </li>
          <li
            className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
            onClick={handleNav}
          >
            <a href="#staff">Staff</a>
          </li>
          <li
            className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
            onClick={handleNav}
          >
            <a href="#about">About</a>
          </li>
          <li
            className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box"
            onClick={handleNav}
          >
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
