import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import HomeIcon from "@mui/icons-material/Home";

import float from "../CSS/float.module.css";

import { useNavigate } from "react-router-dom";


function FloatingBtn2({ night, setNight }) {
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

  //홈 Floating 버튼 클릭 처리 함수
  const onHomeClick = () => {
    navigate("/");
  };


  return (
    <Box className={float.flex} sx={{ "& > :not(style)": { m: 1 } }}>
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
    </Box>
  );
}

export default FloatingBtn2;
