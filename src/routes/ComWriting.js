import React from "react";

import Writing from "../components/Writing";
import Footer from "../components/Footer";
import FloatingBtn2 from "../components/FloatingBtn2";
import CommunityMenuBar from "../components/CommunityMenuBar";

import frame from "../CSS/communityFrame.module.css";

const MemorizedCommunityMenuBar = React.memo(CommunityMenuBar);
const MemorizedWriting = React.memo(Writing);
const MemorizedFloatingBtn2 = React.memo(FloatingBtn2);
const MemorizedFooter = React.memo(Footer);

function ComWriting({
  job,
  selectedGroup,
  jobEng,
  night,
  setNight,
  loginState,
  userRN,
  setH,
  setC,
  writingNum,
}) {
  const writingInfo = {
    글번호: Number(writingNum),
  };

  return (
    <>
      <MemorizedCommunityMenuBar job={job} selectedGroup={selectedGroup} />
      <div className={frame.wide}>
        {(selectedGroup === "프리랜서" || selectedGroup === "크리에이터") && (
          <h1 className={frame.h1}>
            {selectedGroup === job
              ? `${job} 커뮤니티`
              : `${selectedGroup} ${job} 커뮤니티`}
            <div style={{ marginRight: "14%" }}>
              <MemorizedFloatingBtn2 night={night} setNight={setNight} />
            </div>
          </h1>
        )}
        {selectedGroup === "자영업자" && (
          <h1 className={frame.h1}>
            {selectedGroup === job
              ? `${job} 사장님 커뮤니티`
              : `${selectedGroup} ${job} 사장님 커뮤니티`}
            <div style={{ marginRight: "14%" }}>
              <MemorizedFloatingBtn2 night={night} setNight={setNight} />
            </div>
          </h1>
        )}

        <div>
          <MemorizedWriting
            writingInfo={writingInfo}
            jobEng={jobEng}
            userRN={userRN}
            loginState={loginState}
            setH={setH}
            setC={setC}
            job={job}
            selectedGroup={selectedGroup}
          />
        </div>
      </div>
      <MemorizedFooter />
    </>
  );
}

export default ComWriting;
