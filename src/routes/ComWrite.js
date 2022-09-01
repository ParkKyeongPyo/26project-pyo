import React from "react";
import Write from "../components/Write";
import Footer from "../components/Footer";
import FloatingBtn2 from "../components/FloatingBtn2";
import CommunityMenuBar from "../components/CommunityMenuBar";

import frame from "../CSS/communityFrame.module.css";

const MemorizedCommunityMenuBar = React.memo(CommunityMenuBar);
const MemorizedWrite = React.memo(Write);
const MemorizedFloatingBtn2 = React.memo(FloatingBtn2);
const MemorizedFooter = React.memo(Footer);

function ComWrite({
  job,
  selectedGroup,
  jobEng,
  night,
  setNight,
  loginState,
  userRN,
}) {
  const category = sessionStorage.getItem("Category");

  return (
    <>
      <MemorizedCommunityMenuBar job={job} selectedGroup={selectedGroup} />
      <div className={frame.wide}>
        <div className={frame.wideSub}>
          {(selectedGroup === "프리랜서" || selectedGroup === "크리에이터") && (
            <h1 className={frame.h1}>
              {job === "프리랜서" || job === "크리에이터" ? (
                <div className={frame.h}>{`${job} 커뮤니티`}</div>
              ) : (
                <div className={frame.h}>{`${category} ${job} 커뮤니티`}</div>
              )}
              <div className={frame.hFloat}>
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
              <div style={{ marginRight: "14%" }}>
                <MemorizedFloatingBtn2 night={night} setNight={setNight} />
              </div>
            </h1>
          )}

          <div>
            <MemorizedWrite
              job={job}
              jobEng={jobEng}
              selectedGroup={selectedGroup}
              userRN={userRN}
              loginState={loginState}
            />
          </div>
        </div>
        <MemorizedFooter />
      </div>
    </>
  );
}

export default ComWrite;
