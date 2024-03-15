import {} from "@gsap/react";
import { Power3, TweenMax } from "gsap";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import img_logo from "../assets/logos/LOGO RSS.jpg  5.png";

const NavBar = () => {
  let ref = useRef([]);
  let logoRef = useRef([]);

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
      <div className="px-2">
        <img
          className="inline shadow-lg shadow-indigo-500/50 opacity-0"
          ref={(el) => (logoRef = el)}
          src={img_logo}
          alt="..."
          style={{ width: 50 }}
        />
      </div>
      <ul className="flex gap-12 text-white opacity-0" ref={(el) => (ref = el)}>
        <li className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box">
          <Link to="/main-section">Home</Link>
        </li>
        <li className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box">
          <Link to="/about">About</Link>
        </li>
        <li className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer box">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="text-lg duration-300 transition ease-in delay-150 hover:underline cursor-pointer    box">
          <Link to="/documents">Documents</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
