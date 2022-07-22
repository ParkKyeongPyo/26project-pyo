import styles from "../CSS/login.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";
import Frame from "../CSS/communityFrame.module.css";

function Clubbar() {
  return (
    <div className={styles.flexThinBar}>
      <div>
        <Button>전체</Button>
        <Button>인기</Button>
      </div>
      <div>
        <span className={Frame.middleBtn}>전공</span>
        <span className={Frame.middleBtn}>자기계발</span>
        <span className={Frame.middleBtn}>취미</span>
      </div>
      <div>
        <Button>글쓰기</Button>
      </div>
    </div>
  );
}

export default Clubbar;