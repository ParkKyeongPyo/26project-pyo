import styles from '../CSS/login.module.css';
import ClubBar from '../communityNavCol/ClubBar';

function Club(){
    return(
        <div className={styles.flexCommunity} style={{width: "inherit"}}>
            <ClubBar/>
        </div>
    );
}

export default Club;