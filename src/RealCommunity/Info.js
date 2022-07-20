import styles from '../CSS/login.module.css';
import InfoBar from '../communityNavCol/InfoBar';


function Info(){
    return(
        <div className={styles.flexCommunity} style={{width: "inherit"}}>
            <InfoBar/>
        </div>
    );
}

export default Info;