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
  const writingInfo = {};

  if (writingNum !== "") {
    writingInfo.글번호 = Number(writingNum);
    sessionStorage.setItem("글번호", writingInfo.글번호);
  } else {
    writingInfo.글번호 = Number(sessionStorage.getItem("글번호"));
  }

  const category = sessionStorage.getItem("Category");

  return (
    <>
      <MemorizedCommunityMenuBar job={job} selectedGroup={selectedGroup} />
      <div className={frame.wide}>
        <div className={frame.wideSub}>
          {(selectedGroup === "프리랜서" || selectedGroup === "크리에이터") && (
            <h1 className={frame.h1}>
              {(job === "프리랜서" || job === "크리에이터") ? (
                <div className={frame.h}>{`${job} 커뮤니티`}</div>
              ) : (
                <div className={frame.h}>{`${category} ${job} 커뮤니티`}</div>
              )}
              <div className={frame.floatingBtn}>
                <MemorizedFloatingBtn2 night={night} setNight={setNight} />
              </div>
            </h1>
          )}
          {selectedGroup === "자영업자" && (
            <h1 className={frame.h1}>
              {job == "자영업자" ? (
                <div className={frame.h}>{`${job} 사장님 커뮤니티`}</div>
              ) : (
                <div
                  className={frame.h}
                >{`${category} ${job} 사장님 커뮤니티`}</div>
              )}
              <div className={frame.floatingBtn}>
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
      </div>
    </>
  );
}

export default ComWriting;
