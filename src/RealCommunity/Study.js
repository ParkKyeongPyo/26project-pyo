import styles from '../CSS/login.module.css';
import StudyBar from '../communityNavCol/StudyBar';


function Study(){
    return(
        <div className={styles.flexCommunity} style={{width: "inherit"}}>
            <StudyBar/>
        </div>
    );
}

export default Study;