import MenuBar from "../components/MenuBar";
import Jobchosing from "../components/Jobchosing";
import Footer from "../components/Footer";

import React, { useEffect } from "react";

function Home({
  loginState,
  setSelectedJob,
  setSelectedJobEng,
  setSelectedGroup,
  selectedGroup,
  setH,
  setC,
  setJ,
}) {
  useEffect(() => {
    setH("혼자번당-혼자 일하는 모든 분들을 위한 커뮤니티");
    setC("혼자 일하는 모든 프리랜서,크리에이터, 자영업자 커뮤니티");
  }, []);

  const MemorizedMenuBar= React.memo(MenuBar);
  const MemorizedFooter= React.memo(Footer);

  return (
    <div>
      <MemorizedMenuBar loginState={loginState} />
      <Jobchosing
        setSelectedJob={setSelectedJob}
        setSelectedJobEng={setSelectedJobEng}
        setSelectedGroup={setSelectedGroup}
        selectedGroup={selectedGroup}
        setJ={setJ}
      />
      <MemorizedFooter />
    </div>
  );
}

export default Home;
