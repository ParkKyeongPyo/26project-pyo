import CommunityMenuBar from "../components/CommunityMenuBar";
import CommunityFrame from "../components/CommunityFrame";

import React, { useEffect, useState } from "react";

const MemorizedCommunityMenuBar = React.memo(CommunityMenuBar);

function GroupCommunity({
  selectedJob,
  selectedGroup,
  selectedJobEng,
  night,
  setNight,
  loginState,
  setH,
  setC,
  setWritingNum,
}) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender((prev) => !prev);
  }, []);

  if (selectedGroup === "프리랜서") {
    return (
      <>
        <MemorizedCommunityMenuBar
          job={selectedJob}
          jobEng={selectedJobEng}
          selectedGroup={selectedGroup}
        />
        <CommunityFrame
          job=""
          jobEng="allFree"
          selectedGroup={selectedGroup}
          night={night}
          setNight={setNight}
          loginState={loginState}
          setH={setH}
          setC={setC}
          setWritingNum={setWritingNum}
        />
      </>
    );
  } else if (selectedGroup === "크리에이터") {
    return (
      <>
        <MemorizedCommunityMenuBar
          job={selectedJob}
          selectedGroup={selectedGroup}
          jobEng={selectedJobEng}
        />
        <CommunityFrame
          job=""
          jobEng="allCrea"
          selectedGroup={selectedGroup}
          night={night}
          setNight={setNight}
          loginState={loginState}
          setH={setH}
          setC={setC}
          setWritingNum={setWritingNum}
        />
      </>
    );
  } else if (selectedGroup === "자영업자") {
    return (
      <>
        <MemorizedCommunityMenuBar
          job={selectedJob}
          selectedGroup={selectedGroup}
          jobEng={selectedJobEng}
        />
        <CommunityFrame
          job=""
          jobEng="allSelf"
          selectedGroup={selectedGroup}
          night={night}
          setNight={setNight}
          loginState={loginState}
          setH={setH}
          setC={setC}
        />
      </>
    );
  }
}

export default GroupCommunity;
