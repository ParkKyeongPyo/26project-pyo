import styles from "../CSS/login.module.css";
import groupStyles from "../CSS/jobGroup.module.css";
import common from "../CSS/common.module.css";
import home from "../CSS/home.module.css";
import "antd/dist/antd.min.css";

import { message } from "antd";
import "antd/dist/antd.min.css";

import { Link } from "react-router-dom";

import { db } from "../fbase.js";
import { doc, updateDoc, getDoc } from "firebase/firestore";

import dateCalculator from "./dateCalculator.js";

import { EyeFilled } from "@ant-design/icons";

/* 
해결해야 될 문제
1. 여러 개 직군 클릭시 문제 => 하나만 클릭하게 해야 함.
*/

let pick = [
  {
    닉네임: "익명9373",
    제목: "[정리] 크리에이터는 무에서 유를 창조하는 사람이 아니다. (feat.브랜드보이, 드로앤드류)",
    커뮤니티: "혼자번당",
    community: "honjabundang",
    카테고리: "크리에이터",
    날짜: "2022-09-05 21:34:05",
    글분류: "정보공유",
    글번호: 3,
    job: "퍼스널 브랜더",
    jobEng: "perb",
    조회수: 11,
  },
  {
    닉네임: "익명2728",
    제목: "퍼스널 브랜딩의 4단계 프로세스",
    커뮤니티: "혼자번당",
    community: "honjabundang",
    카테고리: "크리에이터",
    날짜: "2022-09-02 14:38:18",
    글분류: "정보공유",
    글번호: 1,
    job: "퍼스널 브랜더",
    jobEng: "perb",
    조회수: 24,
  },
  {
    닉네임: "익명3470",
    제목: "프로그래머에게 가장 중요한 것",
    커뮤니티: "혼자번당",
    community: "honjabundang",
    카테고리: "프리랜서",
    날짜: "2022-09-01 15:21:17",
    글분류: "전체",
    글번호: 2,
    job: "개발자",
    jobEng: "dev",
    조회수: 35,
  },
  {
    닉네임: "개발자",
    제목: "초보 개발자라면 꼭 기억해야 할 5가지 (feat.노마드코더)",
    커뮤니티: "혼자번당",
    community: "honjabundang",
    카테고리: "프리랜서",
    날짜: "2022-09-01 14:51:47",
    글분류: "전체",
    글번호: 1,
    job: "개발자",
    jobEng: "dev",
    조회수: 37,
  },
  {
    닉네임: "고독한 대식가",
    제목: "초기 크리에이터가 성장하기 위한 타게팅 전략",
    커뮤니티: "혼자번당",
    community: "honjabundang",
    카테고리: "크리에이터",
    날짜: "2022-08-31 03:59:32",
    글분류: "운영",
    글번호: 3,
    job: "크리에이터",
    jobEng: "allCrea",
    조회수: 40,
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

    sessionStorage.setItem("커뮤니티", e.target.innerText);
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
    sessionStorage.setItem("Category", pick[index].카테고리);
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

    const docData = await getDoc(docSnap);

    await updateDoc(docSnap, {
      count: docData.data().count + 1,
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
      <div className={home.frameSub}>
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

            <div className={home.title}>
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
                {pick.map((item, index) => (
                  <div className={home.table}>
                  <div className={home.tableSub}>
                    <span className={home.span}>{item.닉네임}</span>
                    <span className={home.spanDate}>
                      {dateCalculator(item.날짜)}
                    </span>
                    <Link to={`/${item.community}`} className={home.spanCom1}>
                      #{item.커뮤니티}
                    </Link>
                    <Link
                      to={`/${item.community}/community/${item.jobEng}`}
                      title={index}
                      className={home.spanCom2}
                      onClick={onCateClick}
                    >
                      #{item.job}
                    </Link>
                  </div>
                  <div className={home.tableSub2}>
                    <span className={home.spanWriting}>{item.글분류} </span>
                    <Link
                      to="/weeckly"
                      title={index}
                      onClick={onPickClick}
                      className={home.span}
                      onMouseOut={onWeecklyMouseOut}
                    >
                      {item.제목}
                    </Link>

                    <span className={home.count}>
                      <EyeFilled  style={{marginRight: "2px"}}/>
                      {item.조회수}
                    </span>
                  </div>
                </div>
                ))}
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
                    <div className={groupStyles.dangHeader}>
                      <div>"혼자 일하는</div>
                      <div>&nbsp;모든 분들을 위한 커뮤니티"</div>
                    </div>
                    <div className={groupStyles.hashtag}>
                      <div>#프리랜서</div>
                      <div>#크리에이터</div>
                      <div>#자영업자</div>
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
                  <div className={groupStyles.dangHeader}>
                      <div>"혼자 여행가는</div>
                      <div>&nbsp;모든 분들을 위한 커뮤니티"</div>
                    </div>
                    <div className={groupStyles.hashtag}>
                      <div>#국내여행</div>
                      <div>#해외여행</div>
                      <div>#휴가</div>
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
              </div>

              <div className={home.flexTwoRow} style={{ marginTop: "20px" }}>
              <div className={groupStyles.groupFlex}>
                  <div className={groupStyles.groupTopCreater}>
                  <div className={groupStyles.dangHeader}>
                      <div>"혼자 투자하는</div>
                      <div>&nbsp;모든 분들을 위한 커뮤니티"</div>
                    </div>
                    <div className={groupStyles.hashtag}>
                      <div>#주식</div>
                      <div>#부동산</div>
                      <div>#코인</div>
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

                <div className={groupStyles.groupFlex}>
                  <div className={groupStyles.groupTopCreater}>
                  <div className={groupStyles.dangHeader}>
                      <div>"혼자 사는</div>
                      <div>&nbsp;모든 분들을 위한 커뮤니티"</div>
                    </div>
                    <div className={groupStyles.hashtag}>
                      <div>#자취</div>
                      <div>#생활</div>
                      <div>#꿀팁</div>
                    </div>
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
    </div>
  );
}

export default DangChosing;
