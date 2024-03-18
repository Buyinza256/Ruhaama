// import Box from "@mui/material/Box";
// import ImageList from "@mui/material/ImageList";
// import ImageListItem from "@mui/material/ImageListItem";
// import * as React from "react";

// export default function Gallery({ itemData }: { itemData: any[] }) {
//   return (
//     <Box sx={{ width: "100%", height: "100vh", overflowY: "scroll" }}>
//       <ImageList variant="masonry" cols={3} gap={8}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               alt={item.title}
//               loading="lazy"
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </Box>
//   );
// }
import React from "react";

const Gallery = ({ images }) => {
  return (
    <div className="grid grid-cols-1 h-[80%] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-w-1 aspect-h-1 object-contain"
        >
          <img
            src={image.url}
            alt={image.alt}
            className="object-cover w-full h-full rounded-lg shadow"
          />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 rounded-lg">
            <p className="text-white text-center">
              Ruhaama Secondary School Students
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
