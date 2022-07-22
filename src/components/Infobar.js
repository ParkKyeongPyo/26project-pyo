import styles from "../CSS/login.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";
import Frame from "../CSS/communityFrame.module.css";

function Infobar({ onWrite }) {
  return (
    <div className={styles.flexThinBar}>
      <div>
        <Button>전체</Button>
        <Button>인기</Button>
      </div>
      <div>
        <span className={Frame.middleBtn}>대회</span>
        <span className={Frame.middleBtn}>지원</span>
        <span className={Frame.middleBtn}>꿀정보</span>
      </div>
      <div>
        <Button onClick={onWrite}>글쓰기</Button>
      </div>
    </div>
  );
}

export default Infobar;
