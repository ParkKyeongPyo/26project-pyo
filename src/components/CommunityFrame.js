import styles from "../CSS/login.module.css";
import frame from "../CSS/communityFrame.module.css";

import { useState } from "react";

import CommunityFrameSub from "./CommunityFrameSub";
import Write from "../components/Write.js";

function CommunityFrame({ job, userNickname, setUserNickname }) {
  const [write, setWrite] = useState(false);

  const onWrite = () => {
    setWrite(true);
  };

  const onWriteFinish = () => {
    setWrite(false);
  };

  return (
    <div className={styles.flexCom}>
      <div className={frame.wide}>
        <h1>{job} 프리랜서 커뮤니티</h1>
        {write ? (
          <Write setWrite={setWrite} job={job} userNickname={userNickname} setUserNickname={setUserNickname} />
        ) : (
          <CommunityFrameSub job={job} onWrite={onWrite} />
        )}
      </div>
    </div>
  );
}

export default CommunityFrame;
