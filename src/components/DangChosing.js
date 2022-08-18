import styles from "../CSS/login.module.css";
import groupStyles from "../CSS/jobGroup.module.css";
import common from "../CSS/common.module.css";
import "antd/dist/antd.min.css";

import { message } from "antd";
import "antd/dist/antd.min.css";

import { Link } from "react-router-dom";

import { useSpring, useSpringRef, animated, useChain } from "react-spring";

/* 
해결해야 될 문제
1. 여러 개 직군 클릭시 문제 => 하나만 클릭하게 해야 함.
*/

function DangChosing({ setD }) {
  const onGroupMouseOver = (e) => {
    e.target.className = groupStyles.mouseOver;
  };

  const onGroupMouseOut = (e) => {
    e.target.className = groupStyles.group;
  };

  const onDangClick = (e) => {
    setD(e.target.innerText);
  };

  const onyetClick = (e) => {
    message.success("Comming soon!");
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
      <animated.div style={animation1} className={common.flexRowh2}>
        "혼자당은 대한민국에서 혼자인 모든 분들을 위한 커뮤니티입니다"
      </animated.div>

      <animated.div style={animation2} className={common.flexRowMiddle}>
        같은 상황의 혼자인 사람들과 소통하고 배우고 나누며 성장해보세요!
      </animated.div>
      <animated.div style={animation3}>
        <div className={common.imgFlex}>
          <img alt="혼자당" className={common.img} src="img/logonew.png" />
        </div>

        <div className={styles.flexHome}>
          <div className={groupStyles.groupFlex}>
            <div className={groupStyles.groupTopCreater}>
              <h3 className={groupStyles.groupFlexCreater}>
                혼자 일하는 모든 분들을 위한 커뮤니티
              </h3>
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
              <h3 className={groupStyles.groupFlexCreater}>
                혼자 사는 모든 분들을 위한 커뮤니티
              </h3>
              <div className={groupStyles.hashtag}>
                #부동산 #부동산투자 #자취 #생활
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

          <div className={groupStyles.groupFlex}>
            <div className={groupStyles.groupTopCreater}>
              <h3 className={groupStyles.groupFlexCreater}>
                혼자 여행가는 모든 분들을 위한 커뮤니티{" "}
              </h3>
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
        </div>
      </animated.div>
    </div>
  );
}

export default DangChosing;
