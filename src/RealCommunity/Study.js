import styles from '../CSS/login.module.css';
import DevStudy from '../dev/DevStudy';


function Study({job}){
    return(
        <div className={styles.flexCommunity2}>
             {job === "개발자" && <DevStudy />}
        </div>
    );
}

export default Study;