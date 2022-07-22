import styles from "../CSS/login.module.css";
import frame from "../CSS/communityFrame.module.css";

import { useState } from "react";

import SmallBar from "./SmallBar";
import Community from "../RealCommunity/Community";
import Study from "../RealCommunity/Study";
import Club from "../RealCommunity/Club";
import Info from "../RealCommunity/Info";

function CommunityFrame({ job }) {
  const [community, setCommunity] = useState(false);
  const [study, setStudy] = useState(false);
  const [club, setClub] = useState(false);
  const [info, setInfo] = useState(false);

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

  return (
    <div className={styles.flexCom}>
      <div className={frame.wide}>
        <h1>{job} 프리랜서 커뮤니티</h1>
        <SmallBar onClick={onClick} />
        {community && <Community job={job}/>}
        {study && <Study job={job}/>}
        {club && <Club job={job}/>}
        {info && <Info job={job}/>}
      </div>
    </div>
  );
}

export default CommunityFrame;
