import React from "react";

const NavBar = () => {
  return (
    <nav className="text-2xl font-medium flex gap-4 w-full justify-between">
      <div className="px-2">Logo</div>
      <ul className="flex gap-12">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
