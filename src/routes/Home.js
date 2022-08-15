import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import menuStyles from "../CSS/homeMenu.module.css";
import Jobchosing from "../components/Jobchosing";
import FloatingBtn from "../components/FloatingBtn";
import { SettingsBrightness } from "@mui/icons-material";
import Footer from "../components/Footer";


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
      <MenuBar loginState={loginState} night={night}/>
      <Jobchosing
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
        loginState={loginState}
        setSelectedJobEng={setSelectedJobEng}
        setSelectedGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
      />
      <Footer/>
    </div>
  );
}

export default Home;
