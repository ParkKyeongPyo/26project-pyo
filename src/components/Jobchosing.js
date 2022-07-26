import styles from "../CSS/login.module.css";
import groupStyles from "../CSS/jobGroup.module.css";
import common from "../CSS/common.module.css";
import { Popover } from "antd";
import "antd/dist/antd.min.css";

import { Link } from "react-router-dom";

import { Segmented } from "antd";

import { useSpring, useSpringRef, animated, useChain } from "react-spring";

/* 
해결해야 될 문제
1. 여러 개 직군 클릭시 문제 => 하나만 클릭하게 해야 함.
*/

function Jobchosing({
  setSelectedJob,
  setSelectedJobEng,
  setSelectedGroup,
  selectedGroup,
  setJ,
}) {
  const onGroupMouseOver = (e) => {
    e.target.className = groupStyles.mouseOver;
  };

  const onGroupMouseOut = (e) => {
    e.target.className = groupStyles.group;
  };

  const onJobClick = (e) => {
    setSelectedJobEng(e.target.title);
    setSelectedJob(e.target.innerText);
    setJ(e.target.innerText);

    //직업 sessionStorage에 저장해 새로고침시 jobEng 유지하도록 함.
    sessionStorage.setItem("job", e.target.innerText);
    sessionStorage.setItem("jobEng", e.target.title);
    sessionStorage.setItem("Category", e.target.name);
  };

  const onChange = (value) => {
    setSelectedGroup(value);
  };

  const content = () => {
    if (selectedGroup === "프리랜서") {
      return (
        <div>
          혼자번당에서 프리랜서는 회사나 집단과 맺은 자유계약에 의해 수익을
          창출하시는 분을 말합니다.
          <br />
          *위 설명는 법적인 정의가 아닌 혼자번당에서 직업 구분을 위해 사용된
          설명입니다.
        </div>
      );
    } else if (selectedGroup === "크리에이터") {
      return (
        <div>
          혼자번당에서 크리에이터는 스스로 가치와 콘텐츠, 비지니스 모델을 만들어
          수익을 창출하시는 분을 말합니다.
          <br />
          *위 설명는 법적인 정의가 아닌 혼자번당에서 직업 구분을 위해 사용된
          설명입니다.
        </div>
      );
    } else if (selectedGroup === "자영업자") {
      return (
        <div>
          혼자번당에서 자영업자는 오프라인 가게를 운영하는 사장님을 말합니다.
          <br />
          *위 설명는 법적인 정의가 아닌 혼자번당에서 직업 구분을 위해 사용된
          설명입니다.
        </div>
      );
    }
  };

  const animation1Ref = useSpringRef();
  const animation2Ref = useSpringRef();
  const animation3Ref = useSpringRef();

  const animation1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    ref: animation1Ref,
  });
  const animation2 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    ref: animation2Ref,
  });
  const animation3 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    ref: animation3Ref,
  });

  useChain([animation1Ref, animation2Ref], [0.2, 0.6] /*1000*/);
  useChain([animation2Ref, animation3Ref], [0.6, 1.2] /*1000*/);

  return (
    <div style={{ height: "inherit", marginLeft: "auto", marginRight: "auto" }}>
        <animated.div style={animation1} className={common.flexRowhMargin}>
          <div>"혼자번당은 대한민국에서</div>

          <div>&nbsp;혼자 일하는 모든 분들을 위한 커뮤니티입니다"</div>
          
        </animated.div>

        <animated.div style={animation2} className={common.flexRowMiddle}>
          같은 일을 하는 사람들과 소통하고 배우고 나누며 성장해보세요!
        </animated.div>
     
      <animated.div style={animation3}>
        <div className={common.imgFlex}>
          <img alt="혼자당" className={common.img} src="img/work.png" />
        </div>
        <div className={common.flexRow}>
          <Segmented
            size="large"
            className={common.nigthMode}
            onChange={onChange}
            value={selectedGroup}
            options={["프리랜서", "크리에이터", "자영업자"]}
          />
        </div>

        {selectedGroup === "프리랜서" && (
          <div className={styles.flexHome}>
            <div style={{ marginBottom: "40px" }}>
              <Popover content={content} title="프리랜서란?" trigger="hover">
                <span className={common.popover}>프리랜서란?</span>
              </Popover>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="allFree"
                    name="프리랜서"
                    to="/honjabundang/community/allFree"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    프리랜서
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>IT</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="dev"
                    name="프리랜서"
                    to="/honjabundang/community/dev"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    개발자
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>창작</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="dsn"
                    name="프리랜서"
                    to="/honjabundang/community/dsn"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    디자이너
                  </Link>

                  <Link
                    title="wit"
                    name="프리랜서"
                    to="/honjabundang/community/wit"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    작가
                  </Link>
                  <Link
                    title="wton"
                    name="프리랜서"
                    to="/honjabundang/community/wton"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    웹툰 작가
                  </Link>
                  <Link
                    title="cpr"
                    name="프리랜서"
                    to="/honjabundang/community/cpr"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    작곡가
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>문서/글쓰기</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="rpo"
                    name="프리랜서"
                    to="/honjabundang/community/rpo"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    기자
                  </Link>
                  <Link
                    title="trans"
                    name="프리랜서"
                    to="/honjabundang/community/trans"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    번역가
                  </Link>
                  <Link
                    title="inter"
                    name="프리랜서"
                    to="/honjabundang/community/inter"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    통역가
                  </Link>
                  <Link
                    title="copy"
                    name="프리랜서"
                    to="/honjabundang/community/copy"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    카피라이터
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>교육</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="tch"
                    name="프리랜서"
                    to="/honjabundang/community/tch"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    강사
                  </Link>
                  <Link
                    title="psy"
                    name="프리랜서"
                    to="/honjabundang/community/psy"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    심리상담가
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>
                  영상/사진/음향
                </h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="vdo"
                    name="프리랜서"
                    to="/honjabundang/community/vdo"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    영상 편집자
                  </Link>
                  <Link
                    title="pic"
                    name="프리랜서"
                    to="/honjabundang/community/pic"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    사진가
                  </Link>
                  <Link
                    title="vce"
                    name="프리랜서"
                    to="/honjabundang/community/vce"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    성우
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>비즈니스</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="ket"
                    name="프리랜서"
                    to="/honjabundang/community/ket"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    마케터
                  </Link>
                  <Link
                    title="sul"
                    name="프리랜서"
                    to="/honjabundang/community/sul"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    컨설턴트
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>방송/생활</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="act"
                    name="프리랜서"
                    to="/honjabundang/community/act"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    배우
                  </Link>
                  <Link
                    title="mdl"
                    name="프리랜서"
                    to="/honjabundang/community/mdl"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    모델
                  </Link>
                  <Link
                    title="up"
                    name="프리랜서"
                    to="/honjabundang/community/up"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    메이크업 아티스트
                  </Link>
                  <Link
                    title="hair"
                    name="프리랜서"
                    to="/honjabundang/community/hair"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    헤어 디자이너
                  </Link>
                  <Link
                    title="htr"
                    name="프리랜서"
                    to="/honjabundang/community/htr"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    헬스 트레이너
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedGroup === "크리에이터" && (
          <div className={styles.flexHome}>
            <div style={{ marginBottom: "40px" }}>
              <Popover content={content} title="크리에이터란?" trigger="hover">
                <span className={common.popover}>크리에이터란?</span>
              </Popover>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="allCrea"
                    name="크리에이터"
                    to="/honjabundang/community/allCrea"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    크리에이터
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>IT</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="wbap"
                    name="크리에이터"
                    to="/honjabundang/community/wbap"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    웹/앱 운영자
                  </Link>
                  <Link
                    title="smt"
                    name="크리에이터"
                    to="/honjabundang/community/smt"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    스마트 스토어 운영자
                  </Link>
                  <Link
                    title="shop"
                    name="크리에이터"
                    to="/honjabundang/community/shop"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    쇼핑몰 대표
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>SNS</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="tube"
                    name="크리에이터"
                    to="/honjabundang/community/tube"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    유튜버
                  </Link>
                  <Link
                    title="istar"
                    name="크리에이터"
                    to="/honjabundang/community/istar"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    인스타 인플루언서
                  </Link>
                  <Link
                    title="tik"
                    name="크리에이터"
                    to="/honjabundang/community/tik"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    틱톡커
                  </Link>
                  <Link
                    title="blog"
                    name="크리에이터"
                    to="/honjabundang/community/blog"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    블로거
                  </Link>
                  <Link
                    title="perb"
                    name="크리에이터"
                    to="/honjabundang/community/perb"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    퍼스널 브랜더
                  </Link>
                  <Link
                    title="broad"
                    name="크리에이터"
                    to="/honjabundang/community/broad"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    인터넷 방송인
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedGroup === "자영업자" && (
          <div className={styles.flexHome}>
            <div style={{ marginBottom: "40px" }}>
              <Popover content={content} title="자영업자란?" trigger="hover">
                <span className={common.popover}>자영업자란?</span>
              </Popover>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="allSelf"
                    name="자영업자"
                    to="/honjabundang/community/allSelf"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    자영업자
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>요식업</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="din"
                    name="자영업자"
                    to="/honjabundang/community/din"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    음식점
                  </Link>
                  <Link
                    title="cof"
                    name="자영업자"
                    to="/honjabundang/community/cof"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    커피숍
                  </Link>
                  <Link
                    title="dsrt"
                    name="자영업자"
                    to="/honjabundang/community/dsrt"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    디저트/빵가게
                  </Link>
                  <Link
                    title="acol"
                    name="자영업자"
                    to="/honjabundang/community/acol"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    술집
                  </Link>
                  <Link
                    title="franc"
                    name="자영업자"
                    to="/honjabundang/community/franc"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    프렌차이즈
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>편의/여가</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="mini"
                    name="자영업자"
                    to="/honjabundang/community/mini"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    편의점
                  </Link>
                  <Link
                    title="none"
                    name="자영업자"
                    to="/honjabundang/community/none"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    무인 점포
                  </Link>
                  <Link
                    title="study"
                    name="자영업자"
                    to="/honjabundang/community/study"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    스터디 카페
                  </Link>
                  <Link
                    title="pc"
                    name="자영업자"
                    to="/honjabundang/community/pc"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    PC방
                  </Link>
                  <Link
                    title="sing"
                    name="자영업자"
                    to="/honjabundang/community/sing"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    노래방
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>생활</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="health"
                    name="자영업자"
                    to="/honjabundang/community/health"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    헬스장
                  </Link>
                  <Link
                    title="hshop"
                    name="자영업자"
                    to="/honjabundang/community/hshop"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    미용실
                  </Link>
                  <Link
                    title="nail"
                    name="자영업자"
                    to="/honjabundang/community/nail"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    네일샵
                  </Link>
                  <Link
                    title="phone"
                    name="자영업자"
                    to="/honjabundang/community/phone"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    휴대폰 가게
                  </Link>
                  <Link
                    title="cloth"
                    name="자영업자"
                    to="/honjabundang/community/cloth"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    옷가게
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>학원</h2>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="test"
                    name="자영업자"
                    to="/honjabundang/community/test"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    입시/교육
                  </Link>
                  <Link
                    title="exer"
                    name="자영업자"
                    to="/honjabundang/community/exer"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    운동
                  </Link>
                  <Link
                    title="art"
                    name="자영업자"
                    to="/honjabundang/community/art"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    미술
                  </Link>
                  <Link
                    title="sing"
                    name="자영업자"
                    to="/honjabundang/community/sing"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    노래/목소리
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </animated.div>
    </div>
  );
}

export default Jobchosing;
