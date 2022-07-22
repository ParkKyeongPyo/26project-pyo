import styles from "../CSS/login.module.css";
import DevCom from "../dev/DevCom.js";

function Community({ job }) {
  
  return (
  <div className={styles.flexCommunity2}>
    {job === "개발자" && <DevCom />}
    </div>);
}

export default Community;
