import styles from '../CSS/login.module.css';
import Combar from '../communityNavCol/ComBar';


function Community(){
    return(
        <div className={styles.flexCommunity} style={{width: "inherit"}}>
            <Combar/>
        </div>
    );
}

export default Community;