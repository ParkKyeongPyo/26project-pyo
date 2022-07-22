import styles from "../CSS/login.module.css";
import DevStudy from "../dev/DevStudy";
import FreeStudy from "../free/FreeStudy";
import Studybar from "../components/Studybar";

function Study({ job, onWrite}) {
  return (
    <div className={styles.flexCommunity2}>
      <Studybar onWrite={onWrite}/>
      {job === "All" && <FreeStudy />}
      {job === "개발자" && <DevStudy />}
    </div>
  );
}

export default Study;
