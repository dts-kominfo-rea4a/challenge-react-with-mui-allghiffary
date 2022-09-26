// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from "react";
import { Divider, Typography } from "@mui/material";
// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
      <Typography sx={{marginTop:"2rem"}} gutterBottom variant="h3" component="div">
        Call a Friend
      </Typography>
      {/* <h1>Call a Friend</h1> */}
      <Divider>
        <p>Your friendly contact app</p>
      </Divider>
    </>
  );
};

export default Header;
