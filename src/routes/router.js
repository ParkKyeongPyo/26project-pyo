import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import Community from "../components/Community";
import GroupCommunity from "../routes/GroupCommunity";
import FAQ from "../routes/FAQ";
import Feedback from "../routes/Feedback";
import React from "react";
import Honjadang from "./Honjadang";
import Weeckly from "./Weeckly";
import ComWrite from "./ComWrite";
import ComWriting from "./ComWriting";

import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { authService } from "../fbase";
import session from "redux-persist/lib/storage/session";

function RouterCom({ setH, setC, setJ, setD }) {
  const [loginState, setLoginState] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("프리랜서");
  const [selectedJob, setSelectedJob] = useState(sessionStorage.getItem("job"));
  const [selectedJobEng, setSelectedJobEng] = useState(
    sessionStorage.getItem("jobEng")
  );
  const [night, setNight] = useState(false);
  const [userRN, setUserRN] = useState("");
  const [weeklyNum, setWeeklyNum] = useState("");
  const [writingNum, setWritingNum] = useState("");

  useEffect(() => {
    //Auth state observer
    onAuthStateChanged(authService, async (user) => {
      if (user) {
        // ...
        setLoginState(true);
      } else {
        // User is signed out
        // ...
        setLoginState(false);
      }

      //dbMaker3();
    });

    if (!loginState) {
      const randomNumber = Math.ceil(Math.random() * 10000);
      const userRNproto = `익명${randomNumber}`;
      setUserRN(userRNproto);
    }
  }, []);

  //const free = ["dev","dsn", "wit", "wton", "cpr", "rpo", "trans", "inter", "copy", "tch", "psy", "vdo", "pic", "vce", "ket", "sul", "act", "mdl", "up", "hair", "htr"];
  //const creator = ["wbap", "smt", "shop", "tube", "istar", "tik", "blog", "perb", "broad"];
  /*const seller = [
    "din",
    "cof",
    "dsrt",
    "acol",
    "franc",
    "mini",
    "none",
    "study",
    "pc",
    "sing",
    "health",
    "hshop",
    "nail",
    "phone",
    "cloth",
    "test",
    "exer",
    "art",
    "sing",
  ];*/
  //const group = ["allFree", "allCrea", "allSelf"];

  //const freeCate = ["Fav", "Sym", "QA", "Info", "Ex", "Re", "Rev", "Stu", "Tax"];
  //const creatorCate = ["Fav", "Sym", "QA", "Info", "Ex", "Re", "Rev", "Tax", "Man", "Coo"];
  /*const SellerCate = [
    "Fav",
    "Sym",
    "QA",
    "Info",
    "Ex",
    "Re",
    "Rev",
    "Tax",
    "Man",
    "Emp",
  ];*/

  /*const dbMaker = async () => {
    for (let i = 0; i < group.length; i++) {
      
        await setDoc(doc(db, '혼자번당', `${creator[i]}Cate`), {
          [`${creator[i]}Fav`]: 1,
          [`${creator[i]}Sym`]: 1,
          [`${creator[i]}QA`]: 1,
          [`${creator[i]}Info`]: 1,
          [`${creator[i]}Ex`]: 1,

          [`${creator[i]}Re`]: 1,
          [`${creator[i]}Rev`]: 1,
          [`${creator[i]}Tax`]: 1,
          [`${creator[i]}Man`]: 1,
          [`${creator[i]}Coo`]: 1,
        });
      }
  };

  const dbMaker3 = async () => {

    await setDoc(doc(db, '혼자번당', `allSelfCate`), {
      allSelfFav: 1,
      allSelfSym: 1,
      allSelfQA: 1,
      allSelfInfo: 1,
      allSelfEx: 1,

      allSelfRe: 1,
      allSelfRev: 1,
      allSelfTax: 1,
      allSelfMan: 1,
      allSelfEmp: 1,
    });
  };
  

  const dbMaker2 = async () => {

    for (let i = 0; i < seller.length; i++) {
        await setDoc(doc(db, "혼자번당글번호", seller[i]), {
          num: 1
        });
    }
  }*/

  /*
   <Route
          path="/honjabundang/groupCommunity"
          element={
            <GroupCommunity
              selectedJob={selectedJob}
              selectedGroup={selectedGroup}
              selectedJobEng={selectedJobEng}
              night={night}
              setNight={setNight}
              loginState={loginState}
              userRN={userRN}
              setH={setH}
              setC={setC}
              setWritingNum={setWritingNum}
            />
          }
        ></Route>
  */

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Honjadang
              loginState={loginState}
              setH={setH}
              setC={setC}
              setD={setD}
              setJ={setJ}
              setWeeklyNum={setWeeklyNum}
              setSelectedJob={setSelectedJob}
              setSelectedJobEng={setSelectedJobEng}
            />
          }
        ></Route>
        <Route
          path="/Weeckly"
          element={
            <Weeckly
              loginState={loginState}
              setH={setH}
              setC={setC}
              jobEng={selectedJobEng}
              job={selectedJob}
              selectedGroup={selectedGroup}
              userRN={userRN}
              weeklyNum={weeklyNum}
            />
          }
        ></Route>
        <Route path="/FAQ" element={<FAQ loginState={loginState} />}></Route>
        <Route
          path="/Feedback"
          element={<Feedback loginState={loginState} />}
        ></Route>
        <Route
          path="/login"
          element={<Login loginState={loginState} />}
        ></Route>
        <Route
          path="/profile"
          element={<Profile loginState={loginState} />}
        ></Route>
      </Routes>
      <Routes>
        <Route
          path="/honjabundang"
          element={
            <Home
              loginState={loginState}
              setSelectedJob={setSelectedJob}
              setSelectedJobEng={setSelectedJobEng}
              setSelectedGroup={setSelectedGroup}
              selectedGroup={selectedGroup}
              setH={setH}
              setC={setC}
              setJ={setJ}
            />
          }
        ></Route> 
        <Route
          path={`/honjabundang/community/${selectedJobEng}`}
          element={
            <Community
              selectedJob={selectedJob}
              selectedGroup={selectedGroup}
              selectedJobEng={selectedJobEng}
              night={night}
              setNight={setNight}
              loginState={loginState}
              userRN={userRN}
              setH={setH}
              setC={setC}
              setWritingNum={setWritingNum}
            />
          }
        ></Route>
        <Route
          path={`/honjabundang/community/writing/${selectedJobEng}/${writingNum}`}
          element={
            <ComWriting
              job={selectedJob}
              selectedGroup={selectedGroup}
              jobEng={selectedJobEng}
              night={night}
              setNight={setNight}
              loginState={loginState}
              userRN={userRN}
              setH={setH}
              setC={setC}
              writingNum={writingNum}
            />
          }
        ></Route>
        <Route
          path="/honjabundang/community/write"
          element={
            <ComWrite
              job={selectedJob}
              selectedGroup={selectedGroup}
              jobEng={selectedJobEng}
              night={night}
              setNight={setNight}
              loginState={loginState}
              userRN={userRN}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default RouterCom;
