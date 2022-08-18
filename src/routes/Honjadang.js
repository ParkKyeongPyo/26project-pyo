import MenuBarHome from "../components/MenuBarHome";
import Footer from "../components/Footer";
import DangChosing from "../components/DangChosing";

import React, { useEffect } from "react";

const MemorizedMenuBarHome = React.memo(MenuBarHome);
const MemorizedFooter = React.memo(Footer);

function Honjadang({ loginState, setH, setC, setD }) {
  useEffect(() => {
    setD("홈");
    setH("혼자당 - 혼자인 모든 분들을 위한 커뮤니티");
    setC("대한민국에서 혼자인 모든 분들을 위한 커뮤니티 혼자당");
  }, []);
  return (
    <div>
      <MemorizedMenuBarHome loginState={loginState} />
      <DangChosing setH={setH} setC={setC} setD={setD} />
      <MemorizedFooter />
    </div>
  );
}

export default Honjadang;
