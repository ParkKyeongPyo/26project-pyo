import styles from "../CSS/login.module.css";
import DevInfo from "../dev/DevInfo";
import FreeInfo from "../free/FreeInfo";
import Infobar from "../components/Infobar";

function Info({ job, onWrite}) {
  return (
    <div className={styles.flexCommunity2} style={{ width: "inherit" }}>
      <Infobar onWrite={onWrite}/>
      {job === "All" && <FreeInfo />}
      {job === "개발자" && <DevInfo />}
    </div>
  );
}

export default Info;
