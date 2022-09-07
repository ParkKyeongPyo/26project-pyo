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

function TravelChosing({
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
        <div>"혼자간당은 대한민국에서</div>

        <div>&nbsp;혼자 여행가는 모든 분들을 위한 커뮤니티입니다"</div>
      </animated.div>

      <animated.div style={animation2} className={common.flexRowMiddle}>
        혼자 여행가는 사람들과 소통하며 여행 계획 및 후기를 남겨보세요!
      </animated.div>

      <animated.div style={animation3}>
        <div className={common.imgFlex}>
          <img alt="혼자당" className={common.img} src="img/travel.png" />
        </div>
        <div className={common.flexRow}>
          <Segmented
            size="large"
            className={common.nigthMode}
            onChange={onChange}
            value={selectedGroup}
            options={["국내여행", "해외여행"]}
          />
        </div>

        {selectedGroup === "국내여행" && (
          <div className={styles.flexHome}>
            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <div className={groupStyles.groupFlexCreater}>
                  <Link
                    title="domesticT"
                    name="국내여행"
                    to="/honjagandang/community/domesticT"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    국내여행
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>베스트 휴양지</h2>
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
                    제주도
                  </Link>
                  <Link
                    title="dev"
                    name="프리랜서"
                    to="/honjabundang/community/dev"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    부산
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>도시</h2>
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
                    서울
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
                    인천
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
                    대구
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
                    대전
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>바닷가</h2>
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
                    속초
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
                    강릉
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
                    대천
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
                    태안
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
                    포항
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>힐링</h2>
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
                    경주
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
                    전주
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
                    여수
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {selectedGroup === "해외여행" && (
          <div className={styles.flexHome}>
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
                    해외여행
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>아시아</h2>
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
                    아시아
                  </Link>
                  <Link
                    title="wbap"
                    name="크리에이터"
                    to="/honjabundang/community/wbap"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    일본
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
                    중국
                  </Link>
                  <Link
                    title="wbap"
                    name="크리에이터"
                    to="/honjabundang/community/wbap"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    러시아
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
                    베트남
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
                    태국
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
                    필리핀
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>유럽</h2>
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
                    유럽
                  </Link>
                  <Link
                    title="tube"
                    name="크리에이터"
                    to="/honjabundang/community/tube"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    프랑스
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
                    영국
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
                    스위스
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
                    이탈리아
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
                    스페인
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
                    체코
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
                    독일
                  </Link>
                </div>
              </div>
            </div>

            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>오세아니아</h2>
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
                    오스트레일리아
                  </Link>
                  <Link
                    title="tube"
                    name="크리에이터"
                    to="/honjabundang/community/tube"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    뉴질랜드
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
                    하와이
                  </Link>
                </div>
              </div>
            </div>
            
            
            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>북미</h2>
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
                    미국
                  </Link>
                  <Link
                    title="tube"
                    name="크리에이터"
                    to="/honjabundang/community/tube"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    캐나다
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
                    멕시코
                  </Link>
                </div>
              </div>
            </div>
            
            <div className={groupStyles.groupFlex}>
              <div className={groupStyles.groupTopCreater}>
                <h2 className={groupStyles.groupFlexCreaterH}>남미</h2>
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
                    브라질
                  </Link>
                  <Link
                    title="tube"
                    name="크리에이터"
                    to="/honjabundang/community/tube"
                    className={groupStyles.group}
                    onMouseOut={onGroupMouseOut}
                    onMouseOver={onGroupMouseOver}
                    onClick={onJobClick}
                  >
                    아르헨티나
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
                    콜롬비아
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
                    칠레
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
                    페루
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
                    에콰도르
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
                    베네수엘라
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

export default TravelChosing;
