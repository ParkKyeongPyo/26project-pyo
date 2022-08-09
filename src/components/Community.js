import CommunityMenuBar from "./CommunityMenuBar";
import CommunityFrame from "./CommunityFrame";

import { useState, useEffect } from "react";

function Community({
  selectedJob,
  selectedGroup,
  selectedJobEng,
  night,
  setNight,
  loginState,
  userRN,
}) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender((prev) => !prev);
  }, []);
  return (
    <div style={{ height: "inherit" }}>
      <CommunityMenuBar
        job={selectedJob}
        selectedGroup={selectedGroup}
        loginState={loginState}
        selectedJobEng={selectedJobEng}
      />
      <CommunityFrame
        job={selectedJob}
        jobEng={selectedJobEng}
        selectedGroup={selectedGroup}
        night={night}
        setNight={setNight}
        userRN={userRN}
        loginState={loginState}
      />
    </div>
  );
}

export default Community;
