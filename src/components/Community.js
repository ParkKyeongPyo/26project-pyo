import CommunityMenuBar from "./CommunityMenuBar";
import CommunityFrame from "./CommunityFrame";



import React, { useState, useEffect } from "react";

const MemorizedCommunityMenuBar = React.memo(CommunityMenuBar);
const MemorizedCommunityFrame = React.memo(CommunityFrame);

function Community({
  selectedJob,
  selectedGroup,
  selectedJobEng,
  night,
  setNight,
  loginState,
  userRN,
  setH,
  setC,
  setWritingNum
}) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender((prev) => !prev);
  }, []);
  return (
    <div style={{ height: "inherit" }}>
      <MemorizedCommunityMenuBar
        job={selectedJob}
        selectedGroup={selectedGroup}
      />
      <MemorizedCommunityFrame
        job={selectedJob}
        jobEng={selectedJobEng}
        selectedGroup={selectedGroup}
        night={night}
        setNight={setNight}
        userRN={userRN}
        loginState={loginState}
        setH={setH}
        setC={setC}
        setWritingNum={setWritingNum}
      />
    </div>
  );
}

export default Community;
