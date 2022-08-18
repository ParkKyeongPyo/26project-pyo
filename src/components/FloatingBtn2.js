import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import HomeIcon from "@mui/icons-material/Home";

import float from "../CSS/float.module.css";

import { useNavigate } from "react-router-dom";
import { message } from "antd";

function FloatingBtn2({ night, setNight, setWrite, setWriting, setCommunity }) {
  const body = document.querySelector("body");
  const navigate = useNavigate();

  const onSwitchClick = () => {
    if (night) {
      body.style.backgroundColor = "#151515";
      body.style.color = "#ccc";
      setNight(false);
    } else {
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

  //홈 Floating 버튼 클릭 처리 함수
  const onHomeClick = () => {
    navigate("/honjabundang");
  };

  const onMobileClick = () => {
    message.info("모바일 버전은 추후 업데이트 될 예정입니다!")
  };

  return (
    <Box className={float.flex} sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="small" aria-label="like">
        <ArrowBackIcon onClick={onBackClick} />
      </Fab>
      <Fab size="small" aria-label="like">
        <HomeIcon onClick={onHomeClick} />
      </Fab>
      <Fab size="small" aria-label="like">
        {night ? (
          <Brightness3Icon onClick={onSwitchClick} />
        ) : (
          <LightModeRoundedIcon onClick={onSwitchClick} />
        )}
      </Fab>
      <Fab size="small" aria-label="like" onClick={onMobileClick}>
        <PhoneIphoneIcon/>
      </Fab>
    </Box>
  );
}

export default FloatingBtn2;
