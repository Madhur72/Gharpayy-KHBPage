import { Box, Typography } from "@mui/material";
import React from "react";
import image from "../Assets/second.jpeg";
import { CiLocationOn } from "react-icons/ci";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

const Page = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", justifyContent: "center", width: "100%" }}>
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
          style={{ width: "500px", height: "500px", borderRadius: "10px", cursor:"pointer" }}
          alt=""
          onClick={()=>navigate('/images')}
        />
        <div>
          <Typography variant="h5">Gharpayy KHB - GIRLS Edition</Typography>
          <Box sx={{display:"flex",alignItems:"center"}}>
            <CiLocationOn />
            <a href="https://maps.app.goo.gl/oLCSdNStjuSD3HnPA" style={{ color:"gray", textDecoration:"none"}}>841, 80 Feet Rd, Koramangala, Bengaluru, Karnataka 560095</a>
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
