import styles from "../CSS/login.module.css";
import frame from "../CSS/communityFrame.module.css";

import { useState } from "react";

import CommunityFrameSub from "./CommunityFrameSub";
import Write from "../components/Write.js";
import Writing from "./Writing";

function CommunityFrame({ job, userNickname, setUserNickname }) {
  const [write, setWrite] = useState(false);
  const [writing, setWriting] = useState(false);
  const [community, setCommunity] = useState(true);
  const [writingNum, setWritingNum] = useState(0);

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

  const onWriting = (e) => {
    console.log(e);
    setWrite(false);
    setWriting(true);
    setCommunity(false);
  };

  return (
    <div className={styles.flexCom}>
      <div className={frame.wide}>
        <h1>{job} 프리랜서 커뮤니티</h1>
        {write && (
          <Write
            setWrite={setWrite}
            job={job}
            userNickname={userNickname}
            setUserNickname={setUserNickname}
            onWriteFinish={onWriteFinish}
          />
        )}
        {community && (
          <CommunityFrameSub
            job={job}
            onWrite={onWrite}
            onWriting={onWriting}
            setWritingNum={setWritingNum}
          />
        )}
        {writing && <Writing />}
      </div>
    </div>
  );
}

export default CommunityFrame;
