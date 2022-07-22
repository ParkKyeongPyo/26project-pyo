import styles from "../CSS/login.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";
import Frame from "../CSS/communityFrame.module.css";

function Combar() {
  return (
    <div className={styles.flexThinBar}>
      <div>
        <Button>전체</Button>
        <Button>인기</Button>
      </div>
      <div>
        <span className={Frame.middleBtn}>현실고충</span>
        <span className={Frame.middleBtn}>수익</span>
        <span className={Frame.middleBtn}>경험공유</span>
      </div>
      <div>
        <Button>글쓰기</Button>
      </div>
    </div>
  );
}

export default Combar;
