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

function LiveChosing({
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
            options={["혼자산당"]}
          />
        </div>

        <div className={styles.flexHome}>
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
              <h2 className={groupStyles.groupFlexCreaterH}>영상/사진/음향</h2>
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
      </animated.div>
    </div>
  );
}

export default LiveChosing;
