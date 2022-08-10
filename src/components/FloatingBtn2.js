import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import BedtimeRoundedIcon from "@mui/icons-material/BedtimeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

import float from "../CSS/float.module.css";

function FloatingBtn2({ night, setNight, setWrite, setWriting, setCommunity }) {
  const body = document.querySelector("body");

  const onSwitchClick = () => {
    if (night) {
      body.style.backgroundColor = "#151515";
      body.style.color = "#ccc";
      setNight(false);
    } else {
      console.log("whiy");
      body.style.backgroundColor = "white";
      body.style.color = "black";
      setNight(true);
    }
  };

  const onBackClick = () => {
    setWrite(false);
    setWriting(false);
    setCommunity(true);
  };
  
  console.log(night);

  return (
    <Box className={float.flex} sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="small" aria-label="like">
        <ArrowBackIcon onClick={onBackClick} />

      </Fab>
      <Fab size="small" aria-label="like">
        {night ? (
          <Brightness3Icon onClick={onSwitchClick} />
        ) : (
          <LightModeRoundedIcon onClick={onSwitchClick} />
        )}
      </Fab>
    </Box>
  );
}

export default FloatingBtn2;
