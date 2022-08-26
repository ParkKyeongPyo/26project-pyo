import MenuBarHome from "../components/MenuBarHome";
import home from "../CSS/home.module.css";
import common from "../CSS/common.module.css";
import Writing from "../components/Writing";
import Footer from "../components/Footer";

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
  const writingInfo = {
    글번호: Number(weeklyNum),
  };

  return (
    <>
      <MenuBarHome loginState={loginState} />
      <div className={home.middle}>
        <div className={home.headWriting}>
          <div className={common.flexRowh2}>
            <img
              src="img/boss.png"
              alt="혼자당 로고"
              className={home.imgHonja}
            />

            <div style={{ paddingTop: "15px" }}>
              "대한민국에서 혼자인 모든 분들을 위한 커뮤니티, 혼자당"
            </div>
          </div>
        </div>
        <Writing
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
      <Footer/>
    </>
  );
}

export default Weeckly;
