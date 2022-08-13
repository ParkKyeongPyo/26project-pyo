import styles from "../CSS/login.module.css";
import frame from "../CSS/communityFrame.module.css";

import { useState, useEffect } from "react";

import CommunityFrameSub from "./CommunityFrameSub";
import Write from "../components/Write.js";
import Writing from "./Writing";
import FloatingBtn2 from "./FloatingBtn2.js";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../fbase.js";

import { useSpring, useSpringRef, animated, useChain } from "react-spring";

function CommunityFrame({
  job,
  jobEng,
  selectedGroup,
  night,
  setNight,
  userRN,
  loginState,
}) {
  const [write, setWrite] = useState(false);
  const [writing, setWriting] = useState(false);
  const [community, setCommunity] = useState(true);
  const [writingNum, setWritingNum] = useState(0);
  const [writingInfo, setWritingInfo] = useState({});

  console.log(write, writing, community)

  const onWrite = () => {
    setWrite(true);
    setWriting(false);
    setCommunity(false);
  };

  const onWriteFinish = () => {
    setWrite(false);
    setWriting(false);
    setCommunity(true);
  };

  const onWriting = async (e) => {
    setWritingInfo(e);
    setWrite(false);
    setWriting(true);
    setCommunity(false);

    const updateRef = doc(db, jobEng, `${e.글번호}`);

    await updateDoc(updateRef, {
      count: e.조회 + 1,
    });
  };

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

  return (
    <>
      <FloatingBtn2
        night={night}
        setNight={setNight}
        setWrite={setWrite}
        setWriting={setWriting}
        setCommunity={setCommunity}
      />
      <div className={frame.wide} style={animation1}>
        {selectedGroup === "프리랜서" && (
          <animated.h1 style={animation1} className={frame.h1}>
            {selectedGroup} {job} 커뮤니티
          </animated.h1>
        )}
        {selectedGroup === "크리에이터" && (
          <animated.h1 style={animation1} className={frame.h1}>
            {selectedGroup} {job} 커뮤니티
          </animated.h1>
        )}
        {selectedGroup === "자영업자" && (
          <animated.h1 style={animation1} className={frame.h1}>
            {selectedGroup} {job} 사장님 커뮤니티
          </animated.h1>
        )}
        {write && (
          <Write
            style={animation2}
            setWrite={setWrite}
            setCommunity={setCommunity}
            setWriting={setWriting}
            job={job}
            onWriteFinish={onWriteFinish}
            jobEng={jobEng}
            selectedGroup={selectedGroup}
            userRN={userRN}
            loginState={loginState}
          />
        )}
        {community && (
          <animated.div style={animation2}>
            <CommunityFrameSub
              style={animation2}
              job={job}
              onWrite={onWrite}
              onWriting={onWriting}
              setWritingNum={setWritingNum}
              jobEng={jobEng}
              selectedGroup={selectedGroup}
              loginState={loginState}
            />
          </animated.div>
        )}
        {writing && (
          <Writing
            style={animation2}
            writingInfo={writingInfo}
            jobEng={jobEng}
            userRN={userRN}
            loginState={loginState}
          />
        )}
      </div>
    </>
  );
}

export default CommunityFrame;
