import { Box } from "@mui/material";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const Images = [
  { url: "../src/Assets/first.jpeg" },
  { url: "../src/Assets/second.jpeg" },
  { url: "../src/Assets/third.jpeg" },
  { url: "../src/Assets/four.jpeg" },
  { url: "../src/Assets/fifth.jpeg" },
  { url: "../src/Assets/six.jpeg" },
  { url: "../src/Assets/seven.jpeg" },
  { url: "../src/Assets/eight.jpeg" },
  { url: "../src/Assets/nine.jpeg" },
  { url: "../src/Assets/ten.jpeg" },
];

const ImageComp = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center", alignItems:"center", margin:"0px", height:"90vh", width:"100%"}}>
<SimpleImageSlider
        width={500}
        height={650}
        images={Images}
        showBullets={true}
        showNavs={true}
      />
    </Box>
  );
};

export default ImageComp;

