import styles from "../CSS/login.module.css";
import DevClub from "../dev/DevClub";

function Club({ job }) {
  return (
    <div className={styles.flexCommunity2} style={{ width: "inherit" }}>
        {job === "개발자" && <DevClub/>}
    </div>
  );
}

export default Club;
