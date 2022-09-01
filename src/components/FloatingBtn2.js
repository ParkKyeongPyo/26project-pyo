import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import HomeIcon from "@mui/icons-material/Home";

import { useEffect } from "react";

import float from "../CSS/float.module.css";

import { useNavigate } from "react-router-dom";
import { toHaveValue } from "@testing-library/jest-dom/dist/matchers";

function FloatingBtn2({ night, setNight }) {
  const body = document.querySelector("body");
  const navigate = useNavigate();

  const value = sessionStorage.getItem("야간모드");

  if(value === "night") night = true;
  else night = false; 

  const onSwitchClick = () => {
    if (value === "night") {
      body.style.backgroundColor = "white";
      body.style.color = "black";

      sessionStorage.setItem("야간모드", "light");
      setNight("false");
    } else {
      body.style.backgroundColor = "#151515";
      body.style.color = "#ccc";

      sessionStorage.setItem("야간모드", "night");
      setNight("true");
    }
  };

  const nightRefresh = () => {
    if (value === "night") {
      body.style.backgroundColor = "#151515";
      body.style.color = "#ccc";
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
    }
  };

  //홈 Floating 버튼 클릭 처리 함수
  const onHomeClick = () => {
    navigate("/");
  };

  useEffect(() => {
    nightRefresh();
  }, []);


  return (
    <Box className={float.flex} sx={{ "& > :not(style)": { m: 1 } }}>
      <Fab size="small" aria-label="like">
        <HomeIcon onClick={onHomeClick} />
      </Fab>
      <Fab size="small" aria-label="like">
        {night ? (
          <LightModeRoundedIcon onClick={onSwitchClick} />
        ) : (
          <Brightness3Icon onClick={onSwitchClick} />
        )}
      </Fab>
    </Box>
  );
}

export default FloatingBtn2;
