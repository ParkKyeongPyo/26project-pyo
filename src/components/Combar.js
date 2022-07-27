import styles from "../CSS/login.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";
import Frame from "../CSS/communityFrame.module.css";

function Combar({ onWrite, setSelectedCategory }) {
  const onClick = (e) => {
    setSelectedCategory(e.target.innerText);
  };
  return (
    <div className={styles.flexThinBar}>
      <div>
        <Button>전체</Button>
        <Button>인기</Button>
      </div>
      <div>
        <span className={Frame.middleBtn} onClick={onClick}>
          Q&A
        </span>
        <span className={Frame.middleBtn} onClick={onClick}>
          정보
        </span>
        <span className={Frame.middleBtn} onClick={onClick}>
          현실고충
        </span>
        <span className={Frame.middleBtn} onClick={onClick}>
          스터디l동아리 모집
        </span>
        <span className={Frame.middleBtn} onClick={onClick}>
          경험
        </span>
        <span className={Frame.middleBtn} onClick={onClick}>
          수익
        </span>
      </div>
      <div>
        <Button onClick={onWrite}>글쓰기</Button>
      </div>
    </div>
  );
}

export default Combar;
