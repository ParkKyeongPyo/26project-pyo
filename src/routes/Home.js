import { Link } from "react-router-dom";
import MenuBar from "../components/MenuBar";
import menuStyles from "../CSS/homeMenu.module.css";

function Home({loginState}) {
  const onClick = () => {};

  return (
    <div>
      <MenuBar loginState={loginState}/>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
