import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import menuStyles from "../CSS/homeMenu.module.css";
import Jobchosing from "../components/Jobchosing";
import FloatingBtn from "../components/FloatingBtn";
import { SettingsBrightness } from "@mui/icons-material";


function Home({
  loginState,
  selectedJob,
  setSelectedJob,
  setSelectedJobEng,
  setSelectedGroup,
  selectedGroup,
  night,
  setNight
}) {

  return (
    <div>
      <MenuBar loginState={loginState} />
      <FloatingBtn night={night} setNight={setNight}/>
      <Jobchosing
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
        loginState={loginState}
        setSelectedJobEng={setSelectedJobEng}
        setSelectedGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
      />
    </div>
  );
}

export default Home;
