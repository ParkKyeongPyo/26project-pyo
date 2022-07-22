import styles from "../CSS/login.module.css";
import DevCom from "../dev/DevCom.js";
import FreeCom from "../free/FreeCom.js";
import Combar from "../components/Combar.js";

function Community({ job, onWrite }) {
  return (
    <div className={styles.flexCommunity2}>
      <Combar onWrite={onWrite}/>
      {job === "All" && <FreeCom />}
      {job === "개발자" && <DevCom />}
    </div>
  );
}

export default Community;
