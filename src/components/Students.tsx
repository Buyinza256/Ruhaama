import React from "react";
import { images } from "../config/images.js";
import Gallery from "./Gallery.tsx";

type Props = {};

const Students = (props: Props) => {
  // const [gallery, setGallery] = useState(false);
  // const handleOpenGallery = () => {
  //   setGallery(true);
  // };
  return (
    <div className="max-w-[1350px] mx-auto py-16 p-4 text-center bg-gray-200">
      <h1 className="text-shadow">Meet Our Esteemed Students</h1>
      <p className="py-4">The life that moves our institution</p>

      {/* <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4 lg:h-[65vh]">
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
        <div
          className="bg-black w-full h-full"
          role="button"
          onClick={handleOpenGallery}
        >
          <h2 className="text-white">View</h2>
          <h2 className="text-white">More</h2>
        </div>
      </div> */}

      {/* {gallery && ( */}
      <div className="">
        <Gallery itemData={images} />
      </div>
      {/* )} */}
    </div>
  );
};

export default Students;
