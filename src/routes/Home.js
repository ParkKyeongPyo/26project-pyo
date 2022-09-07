import MenuBar from "../components/MenuBar";
import Jobchosing from "../components/Jobchosing";
import TravelChosing from "../honjagandang/TravelChosing";
import Footer from "../components/Footer";

import React, { useEffect } from "react";

const MemorizedMenuBar = React.memo(MenuBar);
const MemorizedFooter = React.memo(Footer);
const MemorizedJobchosing = React.memo(Jobchosing);
const MemorizedTravelChosing = React.memo(TravelChosing);

function Home({
  setSelectedJob,
  setSelectedJobEng,
  setSelectedGroup,
  selectedGroup,
  setH,
  setC,
  setJ,
}) {
  useEffect(() => {
    setH("혼자번당 - 혼자 일하는 모든 분들을 위한 커뮤니티");
    setC(
      "대한민국에서 혼자 일하는 모든 프리랜서, 크리에이터, 자영업자분들을 위한 커뮤니티"
    );
  }, []);
  
  const dang = sessionStorage.getItem("커뮤니티")

  return (
    <div>
      <MemorizedMenuBar />
      {dang === "혼자번당" && (
        <MemorizedJobchosing
          setSelectedJob={setSelectedJob}
          setSelectedJobEng={setSelectedJobEng}
          setSelectedGroup={setSelectedGroup}
          selectedGroup={selectedGroup}
          setJ={setJ}
        />
      )}
      {dang === "혼자간당" && (
        <MemorizedTravelChosing
          setSelectedJob={setSelectedJob}
          setSelectedJobEng={setSelectedJobEng}
          setSelectedGroup={setSelectedGroup}
          selectedGroup={selectedGroup}
          setJ={setJ}
        />
      )}
      <MemorizedFooter />
    </div>
  );
}

export default Home;
