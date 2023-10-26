import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../Assets/second.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { grey } from "@mui/material/colors";

const Page = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "80%" }}>
      <Box
        sx={{
          display: "flex",
          gap: "30px",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
        }}
      >
        <img
          src={image}
          style={{ width: "500px", height: "500px", borderRadius: "10px" }}
          alt=""
        />
        <div>
          <Typography variant="h5">Gharpayy KHB - GIRLS Edition</Typography>
          <Box sx={{display:"flex",alignItems:"center"}}>
            <CiLocationOn />
            <Typography color="gray">841, 80 Feet Rd, Koramangala, Bengaluru, Karnataka 560095</Typography>
          </Box>
        </div>

        <div></div>
        <Typography></Typography>
      </Box>
      <Box></Box>
    </Box>
  );
};

export default Page;
