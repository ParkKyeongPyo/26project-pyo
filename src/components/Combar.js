import styles from "../CSS/login.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";
import Frame from "../CSS/communityFrame.module.css";

function Combar({
  onWrite,
  setSelectedCategory,
  setCateChanged,
  setCurrentPage,
  setLastNum,
  setCateNum,
  selectedGroup
}) {
  const onClick = (e) => {
    setSelectedCategory(e.target.innerText);
    setCateChanged(true);
    setCurrentPage(1);
    setLastNum(10000000);
    setCateNum(10000000);
  };

  const onGroupMouseOver = (e) => {
     e.target.className = Frame.mouseOver;
  };

  const onGroupMouseOut = (e) => {
     e.target.className = Frame.middleBtn;
  };

  if(selectedGroup === "프리랜서"){
    return (
      <div className={styles.flexThinBar}>
        <div>
          <Button onClick={onClick}>전체</Button>
          <Button onClick={onClick}>Q&A</Button>
          <Button onClick={onClick}>인기</Button>
        </div>
        <div>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            정보공유
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            경험공유
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            현실고충
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            수익
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            세금&계약
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            스터디&동아리
          </span>
        </div>
        <div>
          <Button onClick={onWrite}>글쓰기</Button>
        </div>
      </div>
    );
  } else if(selectedGroup === "크리에이터"){
    return (
      <div className={styles.flexThinBar}>
        <div>
          <Button onClick={onClick}>전체</Button>
          <Button onClick={onClick}>Q&A</Button>
          <Button onClick={onClick}>인기</Button>
        </div>
        <div>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            정보공유
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            경험공유
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            현실고충
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            수익
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            세금&계약
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            운영
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            협업
          </span>
        </div>
        <div>
          <Button onClick={onWrite}>글쓰기</Button>
        </div>
      </div>
    );
  } else if(selectedGroup === "자영업자"){
    return (
      <div className={styles.flexThinBar}>
        <div>
          <Button onClick={onClick}>전체</Button>
          <Button onClick={onClick}>Q&A</Button>
          <Button onClick={onClick}>인기</Button>
        </div>
        <div>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            정보공유
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            경험공유
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            현실고충
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            수익
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            세금&계약
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            운영
          </span>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            직원/알바
          </span>
        </div>
        <div>
          <Button onClick={onWrite}>글쓰기</Button>
        </div>
      </div>
    );
  }
}

export default Combar;
