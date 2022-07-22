import styles from "../CSS/login.module.css";
import DevInfo from "../dev/DevInfo";

function Info({ job }) {
  return (
    <div className={styles.flexCommunity2} style={{ width: "inherit" }}>
      {job === "개발자" && <DevInfo />}
    </div>
  );
}

export default Info;
