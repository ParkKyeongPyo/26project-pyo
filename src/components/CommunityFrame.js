import styles from "../CSS/login.module.css";
import frame from "../CSS/communityFrame.module.css";

import { useState } from "react";

import CommunityFrameSub from "./CommunityFrameSub";
import Write from "../components/Write.js";

function CommunityFrame({ job }) {
  const [community, setCommunity] = useState(true);
  const [study, setStudy] = useState(false);
  const [club, setClub] = useState(false);
  const [info, setInfo] = useState(false);
  const [write, setWrite] = useState(false);

  const onClick = (e) => {
    if (e.key === "community") {
      setCommunity(true);
      setStudy(false);
      setClub(false);
      setInfo(false);
    } else if (e.key === "study") {
      setCommunity(false);
      setStudy(true);
      setClub(false);
      setInfo(false);
    } else if (e.key === "club") {
      setCommunity(false);
      setStudy(false);
      setClub(true);
      setInfo(false);
    } else if (e.key === "info") {
      setCommunity(false);
      setStudy(false);
      setClub(false);
      setInfo(true);
    }
  };

  const onWrite = () => {
    setWrite(true);
  };

  const onWriteFinish = () => {
    setWrite(false);
  }

  return (
    <div className={styles.flexCom}>
      <div className={frame.wide}>
        <h1>{job} 프리랜서 커뮤니티</h1>
        {write ? (
          <Write />
        ) : (
          <CommunityFrameSub
            job={job}
            community={community}
            study={study}
            club={club}
            info={info}
            onClick={onClick}
            onWrite={onWrite}
          />
        )}
      </div>
    </div>
  );
}

export default CommunityFrame;
