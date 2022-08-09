import CommunityMenuBar from "../components/CommunityMenuBar";
import CommunityFrame from "../components/CommunityFrame";

import { useEffect, useState } from "react";
import { render } from "@testing-library/react";

function GroupCommunity({
  selectedJob,
  selectedGroup,
  selectedJobEng,
  night,
  setNight,
  loginState,
}) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    setRender((prev) => !prev)
  }, []);

  if (selectedGroup === "프리랜서") {
    return (
      <>
        <CommunityMenuBar
          job={selectedJob}
          selectedGroup={selectedGroup}
          loginState={loginState}
          selectedJobEng={selectedJobEng}
        />
        <CommunityFrame
          job=""
          jobEng="allFree"
          selectedGroup={selectedGroup}
          night={night}
          setNight={setNight}
          loginState={loginState}
        />
      </>
    );
  } else if (selectedGroup === "크리에이터") {
    return (
      <>
        <CommunityMenuBar
          job={selectedJob}
          selectedGroup={selectedGroup}
          loginState={loginState}
          selectedJobEng={selectedJobEng}
        />
        <CommunityFrame
          job=""
          jobEng="allCrea"
          selectedGroup={selectedGroup}
          night={night}
          setNight={setNight}
          loginState={loginState}
        />
      </>
    );
  } else if (selectedGroup === "자영업자") {
    return (
      <>
        <CommunityMenuBar
          job={selectedJob}
          selectedGroup={selectedGroup}
          loginState={loginState}
          selectedJobEng={selectedJobEng}
        />
        <CommunityFrame
          job=""
          jobEng="allSelf"
          selectedGroup={selectedGroup}
          night={night}
          setNight={setNight}
          loginState={loginState}
        />
      </>
    );
  } else {
    console.log("error");
  }
}

export default GroupCommunity;
