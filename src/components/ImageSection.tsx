import React from "react";
import img_1 from "../assets/imgs/IMG-20240222-WA0042.jpg";

const ImageSection = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 p-4 text-center">
      <h1>All inclusive resorts</h1>
      <p className="py-4">On the carribeans best beaches</p>

      <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
        <img
          className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2"
          src={img_1}
          alt="bora bora"
        />
        <img
          className="w-full h-full object-cover"
          src={img_1}
          alt="bora bora"
        />
        <img
          className="w-full h-full object-cover"
          src={img_1}
          alt="bora bora"
        />
        <img
          className="w-full h-full object-cover"
          src={img_1}
          alt="bora bora"
        />
        <img
          className="w-full h-full object-cover"
          src={img_1}
          alt="bora bora"
        />
      </div>
    </div>
  );
};

export default ImageSection;
