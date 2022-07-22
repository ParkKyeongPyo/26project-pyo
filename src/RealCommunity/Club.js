import styles from "../CSS/login.module.css";
import DevClub from "../dev/DevClub";
import FreeClub from "../free/FreeClub";
import Clubbar from "../components/Clubbar";

function Club({ job, onWrite}) {
  return (
    <div className={styles.flexCommunity2} style={{ width: "inherit" }}>
      <Clubbar onWrite={onWrite}/>
      {job === "All" && <FreeClub />}
      {job === "개발자" && <DevClub />}
    </div>
  );
}

export default Club;
