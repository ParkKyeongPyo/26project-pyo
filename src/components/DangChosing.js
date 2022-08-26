import styles from "../CSS/login.module.css";
import groupStyles from "../CSS/jobGroup.module.css";
import common from "../CSS/common.module.css";
import home from "../CSS/home.module.css";
import "antd/dist/antd.min.css";

import { message } from "antd";
import "antd/dist/antd.min.css";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

import { db } from "../fbase.js";
import { doc, updateDoc, getDoc } from "firebase/firestore";

import dateCalculator from "./dateCalculator.js";

import { EyeOutlined } from "@ant-design/icons";

/* 
해결해야 될 문제
1. 여러 개 직군 클릭시 문제 => 하나만 클릭하게 해야 함.
*/

let pick = [
  {
    닉네임: "Tate",
    제목: "헐 크리에이터 커뮤니티가 있네요ㅜㅜ 필요했는데",
    커뮤니티: "혼자번당",
    카테고리: "크리에이터",
    날짜: "2022-08-25 18:07:27",
    글분류: "전체",
    글번호: 1,
    job: "크리에이터",
    jobEng: "allCrea",
    조회수: 14,
  },
];
let best = [];
let hot = [];

function DangChosing({
  setD,
  setJ,
  setWeeklyNum,
  setSelectedJob,
  setSelectedJobEng,
}) {
  //const [render, setRender] = useState(false);

  const onGroupMouseOver = (e) => {
    e.target.className = groupStyles.mouseOverDang;
  };

  const onGroupMouseOut = (e) => {
    e.target.className = groupStyles.dang;
  };

  const onDangClick = (e) => {
    setD(e.target.innerText);
  };

  const onyetClick = (e) => {
    message.success("Comming soon!");
  };

  //#카테고리 클릭
  const onCateClick = (e) => {
    const index = Number(e.target.title);
    setSelectedJobEng(pick[index].jobEng);
    setSelectedJob(pick[index].job);
    setJ(pick[index].job);

    //직업 sessionStorage에 저장해 새로고침시 jobEng 유지하도록 함.
    sessionStorage.setItem("job", pick[index].job);
    sessionStorage.setItem("jobEng", pick[index].jobEng);
  };

  //WEECKLY 글 화면
  const onPickClick = async (e) => {
    e.target.className = home.out;
    const index = Number(e.target.title);
    setWeeklyNum(pick[index].글번호);

    //세션 스토리지에 저장할 필요는 없음 community 테이블이 없기 때문에.
    setSelectedJob(pick[index].job);
    setSelectedJobEng(pick[index].jobEng);

    //조회수 올리기
    const updateRef = doc(db, "혼자번당모든글", pick[index].jobEng);
    const docSnap = doc(updateRef, "Writing", `${pick[index].글번호}`);

    await updateDoc(docSnap, {
      count: pick[index].조회수 + 1,
    });
  };

  const onWeecklyMouseOut = (e) => {
    e.target.className = home.out;
  };

  /*
  const getSeeCount = async () => {
    const pick1Ref = doc(db, "혼자번당모든글", "allCrea");
    const p1Ref = doc(pick1Ref, "Writing", `1`);
    const p1 = await getDoc(p1Ref);

    pick[0].조회수 = p1.data().count;
    setRender((prev) => !prev);
  };

  getSeeCount();

  useEffect(() => {
    getSeeCount();
  }, []);
  */

  return (
    <div className={home.frame}>
      <div className={home.leftBar}>
        <div></div>
      </div>

      <div className={home.middle}>
        <div className={home.head}>
          <div className={common.flexRowh2}>
            <img
              src="img/boss.png"
              alt="혼자당 로고"
              className={home.imgHonja}
            />

            <div style={{ paddingTop: "15px" }}>
              "대한민국에서 혼자인 모든 분들을 위한 커뮤니티, 혼자당"
            </div>
          </div>
        </div>

        <div className={home.middleSub}>
          <div className={home.middleCom}>
            <div className={home.com}>
              <div className={home.comHead}>
                <img className={home.img} alt="혼자당" src="img/boss1.png" />
                <span className={home.naming}>WEEKLY PICK</span>
              </div>
              <div className={home.comTable}>
                <div className={home.table}>
                  <div className={home.tableSub}>
                    <span className={home.span}>{pick[0].닉네임}</span>
                    <span className={home.spanDate}>
                      {dateCalculator(pick[0].날짜)}
                    </span>
                    <Link to="/honjabundang" className={home.spanCom1}>
                      #{pick[0].커뮤니티}
                    </Link>
                    <Link
                      to="/honjabundang/community"
                      title={0}
                      className={home.spanCom2}
                      onClick={onCateClick}
                    >
                      #{pick[0].카테고리}
                    </Link>
                  </div>
                  <div className={home.tableSub2}>
                    <span className={home.spanWriting}>{pick[0].글분류} </span>
                    <Link
                      to="/weeckly"
                      title={0}
                      onClick={onPickClick}
                      className={home.span}
                      onMouseOut={onWeecklyMouseOut}
                    >
                      {pick[0].제목}
                    </Link>

                    <span className={home.count}>
                      <EyeOutlined />
                      {pick[0].조회수}
                    </span>
                  </div>
                </div>
                <div className={home.table}></div>
                <div className={home.table}></div>
                <div className={home.table}></div>
                <div className={home.table}></div>
              </div>
            </div>
            <div className={home.com}>
              <div className={home.comHead}>
                <img className={home.img} alt="혼자당" src="img/boss1.png" />
                <span className={home.naming}>WEEKLY HOT</span>
              </div>
              <div className={home.comTable}>
                <div className={home.table}></div>
                <div className={home.table}></div>
                <div className={home.table}></div>
                <div className={home.table}></div>
                <div className={home.table}></div>
              </div>
            </div>
            <div className={home.com}>
              <div className={home.comHead}>
                <img className={home.img} alt="혼자당" src="img/boss1.png" />
                <span className={home.naming}>WEEKLY BEST</span>
              </div>
              <div className={home.comTable}>
                <div className={home.table}></div>
                <div className={home.table}></div>
                <div className={home.table}></div>
                <div className={home.table}></div>
                <div className={home.table}></div>
              </div>
            </div>
          </div>
          <div className={home.middleDang}>
            <div className={styles.flexHome}>
              <div className={home.flexTwoRow}>
                <div className={groupStyles.groupFlex}>
                  <div className={groupStyles.groupTopCreater}>
                    <div className={groupStyles.groupFlexCreater}>
                      {`<혼자 일하는 모든 분들을 위한 커뮤니티>`}
                    </div>
                    <div className={groupStyles.hashtag}>
                      #프리랜서 #크리에이터 #자영업자
                    </div>
                    <div className={common.imgFlex}>
                      <img
                        alt="혼자번당"
                        className={common.img}
                        src="img/work.png"
                      />
                    </div>
                    <div className={groupStyles.groupFlexCreater}>
                      <Link
                        to="/honjabundang"
                        className={groupStyles.dang}
                        onMouseOut={onGroupMouseOut}
                        onMouseOver={onGroupMouseOver}
                        onClick={onDangClick}
                      >
                        혼자번당
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={groupStyles.groupFlex}>
                  <div className={groupStyles.groupTopCreater}>
                    <div className={groupStyles.groupFlexCreater}>
                      {`<혼자 투자하는 모든 분들을 위한 커뮤니티>`}
                    </div>
                    <div className={groupStyles.hashtag}>
                      #주식 #부동산 #코인 #투자
                    </div>
                    <div className={common.imgFlex}>
                      <img
                        alt="혼투한당"
                        className={common.img}
                        src="img/invest.png"
                      />
                    </div>
                    <div className={groupStyles.groupFlexCreater}>
                      <Link
                        to="/"
                        className={groupStyles.dang}
                        onMouseOut={onGroupMouseOut}
                        onMouseOver={onGroupMouseOver}
                        onClick={onyetClick}
                      >
                        혼투한당
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={home.flexTwoRow} style={{ marginTop: "40px" }}>
                <div className={groupStyles.groupFlex}>
                  <div className={groupStyles.groupTopCreater}>
                    <div className={groupStyles.groupFlexCreater}>
                      {`<혼자 여행가는 모든 분들을 위한 커뮤니티>`}
                    </div>
                    <div className={groupStyles.hashtag}>
                      #국내여행 #해외여행 #휴가
                    </div>
                    <div className={common.imgFlex}>
                      <img
                        alt="혼자간당"
                        className={common.img}
                        src="img/travel.png"
                      />
                    </div>
                    <div className={groupStyles.groupFlexCreater}>
                      <Link
                        to="/"
                        className={groupStyles.dang}
                        onMouseOut={onGroupMouseOut}
                        onMouseOver={onGroupMouseOver}
                        onClick={onyetClick}
                      >
                        혼자간당
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={groupStyles.groupFlex}>
                  <div className={groupStyles.groupTopCreater}>
                    <div className={groupStyles.groupFlexCreater}>
                      {`<혼자 사는 모든 분들을 위한 커뮤니티>`}
                    </div>
                    <div className={groupStyles.hashtag}>#자취 #생활 #꿀팁</div>
                    <div className={common.imgFlex}>
                      <img
                        alt="혼자산당"
                        className={common.img}
                        src="img/home.png"
                      />
                    </div>
                    <div className={groupStyles.groupFlexCreater}>
                      <Link
                        to="/"
                        className={groupStyles.dang}
                        onMouseOut={onGroupMouseOut}
                        onMouseOver={onGroupMouseOver}
                        onClick={onyetClick}
                      >
                        혼자산당
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={home.commingSoon}>Comming soon!</div>
            </div>
          </div>
        </div>
      </div>

      <div className={home.rightBar}></div>
    </div>
  );
}

export default DangChosing;
