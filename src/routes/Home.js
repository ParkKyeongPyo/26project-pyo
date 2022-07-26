import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import menuStyles from "../CSS/homeMenu.module.css";
import Jobchosing from "../components/Jobchosing";

function Home({ loginState, selectedJob, setSelectedJob }) {
  const onClick = () => {};

  return (
    <div>
      <MenuBar loginState={loginState} />
      <Jobchosing
        selectedJob={selectedJob}
        setSelectedJob={setSelectedJob}
        loginState={loginState}
      />
    </div>
  );
}

export default Home;
