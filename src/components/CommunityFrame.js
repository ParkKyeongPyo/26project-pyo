import frame from "../CSS/communityFrame.module.css";

import React, { useState } from "react";

import CommunityFrameSub from "./CommunityFrameSub";
import FloatingBtn2 from "./FloatingBtn2.js";
import Footer from "./Footer";

import { useSpring, useSpringRef, animated, useChain } from "react-spring";
import session from "redux-persist/lib/storage/session";

const MemorizedFloatingBtn2 = React.memo(FloatingBtn2);
const MemorizedCommunityFrameSub = React.memo(CommunityFrameSub);
const MemorizedFooter = React.memo(Footer);

function CommunityFrame({
  job,
  jobEng,
  selectedGroup,
  night,
  setNight,
  userRN,
  loginState,
  setH,
  setC,
  setWritingNum,
}) {
  const animation1Ref = useSpringRef();
  const animation2Ref = useSpringRef();

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

  useChain([animation1Ref, animation2Ref], [0.2, 0.4] /*1000*/);

  const category = sessionStorage.getItem("Category");

  return (
    <>
      <div className={frame.wide} style={animation1}>
        <div className={frame.wideSub}>
          {(selectedGroup === "프리랜서" || selectedGroup === "크리에이터") && (
            <animated.h1 style={animation1} className={frame.h1}>
              {(job === "프리랜서" || job === "크리에이터") ? (
                <div className={frame.h}>{`${job} 커뮤니티`}</div>
              ) : (
                <div className={frame.h}>
                  {`${category} ${job} 커뮤니티`}
                </div>
              )}
              <div className={frame.floatingBtn}>
                <MemorizedFloatingBtn2 night={night} setNight={setNight} />
              </div>
            </animated.h1>
          )}
          {selectedGroup === "자영업자" && (
            <animated.h1 style={animation1} className={frame.h1}>
              {job == "자영업자" ? (
                <div
                  className={frame.h}
                >{`${job} 사장님 커뮤니티`}</div>
              ) : (
                <div
                  className={frame.h}
                >{`${category} ${job} 사장님 커뮤니티`}</div>
              )}
              <div className={frame.floatingBtn}>
                <MemorizedFloatingBtn2 night={night} setNight={setNight} />
              </div>
            </animated.h1>
          )}

          <animated.div style={animation2}>
            <MemorizedCommunityFrameSub
              style={animation2}
              job={job}
              jobEng={jobEng}
              selectedGroup={selectedGroup}
              loginState={loginState}
              setH={setH}
              setC={setC}
              setWritingNum={setWritingNum}
            />
          </animated.div>
        </div>
      </div>
      <MemorizedFooter />
    </>
  );
}

export default CommunityFrame;
