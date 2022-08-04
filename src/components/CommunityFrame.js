import styles from "../CSS/login.module.css";
import frame from "../CSS/communityFrame.module.css";

import { useState } from "react";

import CommunityFrameSub from "./CommunityFrameSub";
import Write from "../components/Write.js";
import Writing from "./Writing";

import {doc, updateDoc} from "firebase/firestore";
import {db} from "../fbase.js";

function CommunityFrame({ job, jobEng }) {
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
    console.log(e)
    setWritingInfo(e);
    setWrite(false);
    setWriting(true);
    setCommunity(false);

    const updateRef = doc(db, jobEng, `${e.글번호}`);

    await updateDoc(updateRef, {
      count: e.조회 + 1
    });
  };

  return (
    <div className={frame.wide}>
      <h1 className={frame.h1}>프리랜서 {job} 커뮤니티</h1>
      {write && (
        <Write
          setWrite={setWrite}
          setCommunity={setCommunity}
          setWriting={setWriting}
          job={job}
          onWriteFinish={onWriteFinish}
          jobEng={jobEng}
        />
      )}
      {community && (
        <CommunityFrameSub
          job={job}
          onWrite={onWrite}
          onWriting={onWriting}
          setWritingNum={setWritingNum}
          jobEng={jobEng}
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
  );
}

export default CommunityFrame;
