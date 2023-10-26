import { Box } from "@mui/material";
import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const Images = [{ url: "../src/Assets/first.jpeg" }, { url: "../src/Assets/second.jpeg" }];

const ImageComp = () => {
  return (
    <Box sx={{display:"flex", justifyContent:"center",padding:"10px"}}>
      <SimpleImageSlider
        width={500}
        height={700}
        images={Images}
        showBullets={true}
        showNavs={true}
      />
    </Box>
  );
};

export default ImageComp;
