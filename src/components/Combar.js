import styles from "../CSS/login.module.css";
import { Button, message, Popover } from "antd";
import "antd/dist/antd.min.css";
import Frame from "../CSS/communityFrame.module.css";
import { Link } from "react-router-dom";

function Combar({
  setSelectedCategory,
  setCateChanged,
  setCurrentPage,
  setLastNum,
  setCateNum,
  setFavNum,
  setSymNum,
  selectedGroup,
  loginState,
  setPageSize,
  setMyWriting,
}) {
  const onClick = (e) => {
    setSelectedCategory(e.target.innerText);
    setCateChanged(true);
    setCurrentPage(1);
    setLastNum(10000000);
    setCateNum(10000000);
    setFavNum(10000000);
    setSymNum(10000000);
    setMyWriting(false);
  };

  const onMyWritingClick = (e) => {
    if (loginState) {
      setSelectedCategory(e.target.innerText);
      setCateChanged(true);
      setCurrentPage(1);
      //setLastNum(10000000);
      //setCateNum(10000000);
      //setSymNum(10000000);
      setPageSize(20);
      setMyWriting(true);
    } else {
      message.warning("내 글보기 기능은 로그인 후 이용가능합니다");
    }
  };

  const onGroupMouseOver = (e) => {
    e.target.className = Frame.mouseOver;
  };

  const onGroupMouseOut = (e) => {
    e.target.className = Frame.middleBtn;
  };

  if (selectedGroup === "프리랜서") {
    return (
      <div className={styles.flexThinBar}>
        <div>
          <Button className={Frame.btn} onClick={onClick}>
            전체
          </Button>
          <Button className={Frame.btn} onClick={onClick}>
            인기
          </Button>
          <Button className={Frame.btn} onClick={onClick}>
            공감
          </Button>
          <Popover
            content="내 글은 가장 최근 글을 기준으로 최대 20개까지 볼 수 있습니다."
            title="주의사항"
            trigger="hover"
          >
            <Button className={Frame.btn} onClick={onMyWritingClick}>
              내 글
            </Button>
          </Popover>
        </div>
        <div className={Frame.middle3}>
          <span
            className={Frame.middleBtn}
            onClick={onClick}
            onMouseOut={onGroupMouseOut}
            onMouseOver={onGroupMouseOver}
          >
            Q&A
          </span>
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
          <Button className={Frame.btn}>
            <Link to="/honjabundang/community/write">글쓰기</Link>
          </Button>
        </div>
      </div>
    );
  } else if (selectedGroup === "크리에이터") {
    return (
      <div>
        <div className={styles.flexThinBar}>
          <div>
            <Button className={Frame.btn} onClick={onClick}>
              전체
            </Button>
            <Button className={Frame.btn} onClick={onClick}>
              인기
            </Button>
            <Button className={Frame.btn} onClick={onClick}>
              Q&A
            </Button>
            <Popover
              content="내 글은 최근 날짜를 기준으로 최대 20개까지 볼 수 있습니다."
              title="주의사항"
              trigger="hover"
            >
              <Button className={Frame.btn} onClick={onMyWritingClick}>
                내 글
              </Button>
            </Popover>
          </div>
          <div className={Frame.middle3}>
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
            <Button className={Frame.btn}>
              <Link to="/honjabundang/community/write">글쓰기</Link>
            </Button>
          </div>
        </div>
        <div className={Frame.middle1}>
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
      </div>
    );
  } else if (selectedGroup === "자영업자") {
    return (
      <div className={styles.flexThinBar}>
        <div>
          <Button className={Frame.btn} onClick={onClick}>
            전체
          </Button>
          <Button className={Frame.btn} onClick={onClick}>
            인기
          </Button>
          <Button className={Frame.btn} onClick={onClick}>
            Q&A
          </Button>
          <Popover
            content="내 글은 최근 날짜를 기준으로 최대 20개까지 볼 수 있습니다."
            title="주의사항"
            trigger="hover"
          >
            <Button className={Frame.btn} onClick={onMyWritingClick}>
              내 글
            </Button>
          </Popover>
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
            직원&알바
          </span>
        </div>
        <div>
          <Button className={Frame.btn}>
            <Link to="/honjabundang/community/write">글쓰기</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Combar;
