import React from "react";

import MenuBarHome from "../components/MenuBarHome";
import home from "../CSS/home.module.css";
import common from "../CSS/common.module.css";
import Writing from "../components/Writing";
import Footer from "../components/Footer";

const MemorizedWriting = React.memo(Writing);
const MemorizedFooter= React.memo(Footer);
const MemorizedMenuBarHome= React.memo(MenuBarHome);

function Weeckly({
  loginState,
  setH,
  setC,
  jobEng,
  job,
  selectedGroup,
  userRN,
  weeklyNum,
}) {
  const writingInfo = {};

  if (weeklyNum !== "") {
    writingInfo.글번호 = Number(weeklyNum);
    sessionStorage.setItem("Weeckly글번호", writingInfo.글번호);
  } else {
    writingInfo.글번호 = Number(sessionStorage.getItem("Weeckly글번호"));
  }

  return (
    <>
      <MemorizedMenuBarHome loginState={loginState} />
      <div className={home.weeckly}>
        <div className={home.weecklySub}>
          <div className={home.headWriting}>
            <div className={common.flexRowh2}>
              <img
                src="img/boss.png"
                alt="혼자당 로고"
                className={home.imgHonja}
              />

              <div className={home.title} style={{ paddingTop: "15px" }}>
                "대한민국에서 혼자인 모든 분들을 위한 커뮤니티, 혼자당"
              </div>
            </div>
          </div>
          <MemorizedWriting
            writingInfo={writingInfo}
            loginState={loginState}
            setH={setH}
            setC={setC}
            jobEng={jobEng}
            job={job}
            selectedGroup={selectedGroup}
            userRN={userRN}
          />
        </div>
      </div>
      <MemorizedFooter />
    </>
  );
}

export default Weeckly;
