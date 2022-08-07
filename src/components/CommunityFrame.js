import styles from "../CSS/login.module.css";
import frame from "../CSS/communityFrame.module.css";

import { useState } from "react";

import CommunityFrameSub from "./CommunityFrameSub";
import Write from "../components/Write.js";
import Writing from "./Writing";
import FloatingBtn2 from "./FloatingBtn2.js";

import { doc, updateDoc } from "firebase/firestore";
import { db } from "../fbase.js";

function CommunityFrame({ job, jobEng, selectedGroup, night, setNight }) {
  const [write, setWrite] = useState(false);
  const [writing, setWriting] = useState(false);
  const [community, setCommunity] = useState(true);
  const [writingNum, setWritingNum] = useState(0);
  const [writingInfo, setWritingInfo] = useState({});

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
    console.log(e);
    setWritingInfo(e);
    setWrite(false);
    setWriting(true);
    setCommunity(false);

    const updateRef = doc(db, jobEng, `${e.글번호}`);

    await updateDoc(updateRef, {
      count: e.조회 + 1,
    });
  };

  return (
    <>
      <FloatingBtn2
        night={night}
        setNight={setNight}
        setWrite={setWrite}
        setWriting={setWriting}
        setCommunity={setCommunity}
      />
      <div className={frame.wide}>
        {selectedGroup === "프리랜서" && (
          <h1 className={frame.h1}>
            [{selectedGroup}] {job} 커뮤니티
          </h1>
        )}
        {selectedGroup === "크리에이터" && (
          <h1 className={frame.h1}>
            [{selectedGroup}] {job} 커뮤니티
          </h1>
        )}
        {selectedGroup === "자영업자" && (
          <h1 className={frame.h1}>
            [{selectedGroup}] {job} 사장님 커뮤니티
          </h1>
        )}
        {write && (
          <Write
            setWrite={setWrite}
            setCommunity={setCommunity}
            setWriting={setWriting}
            job={job}
            onWriteFinish={onWriteFinish}
            jobEng={jobEng}
            selectedGroup={selectedGroup}
          />
        )}
        {community && (
          <CommunityFrameSub
            job={job}
            onWrite={onWrite}
            onWriting={onWriting}
            setWritingNum={setWritingNum}
            jobEng={jobEng}
            selectedGroup={selectedGroup}
          />
        )}
        {writing && (
          <Writing
            job={job}
            writingInfo={writingInfo}
            setWrite={setWrite}
            setCommunity={setCommunity}
            setWriting={setWriting}
            jobEng={jobEng}
          />
        )}
      </div>
    </>
  );
}

export default CommunityFrame;
