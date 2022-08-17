import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import Community from "../components/Community";
import GroupCommunity from "../routes/GroupCommunity";
import FAQ from "../routes/FAQ";
import Feedback from "../routes/Feedback";
import React from "react";

import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { authService} from "../fbase";

function RouterCom({ setH, setC, setJ }) {
  const [loginState, setLoginState] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("프리랜서");
  const [selectedJob, setSelectedJob] = useState(sessionStorage.getItem("job"));
  const [selectedJobEng, setSelectedJobEng] = useState(
    sessionStorage.getItem("jobEng")
  );
  const [night, setNight] = useState(true);
  const [userRN, setUserRN] = useState("");

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

      //dbMaker2();
    });

    if (!loginState) {
      const randomNumber = Math.ceil(Math.random() * 10000);
      const userRNproto = `익명${randomNumber}`;
      setUserRN(userRNproto);
    }
  }, []);

  //const free = ["dev","dsn", "wit", "wton", "cpr", "rpo", "trans", "inter", "copy", "tch", "psy", "vdo", "pic", "vce", "ket", "sul", "act", "mdl", "up", "hair", "htr"];
  //const creator = ["wbap", "smt", "shop", "tube", "istar", "tik", "blog", "perb", "broad"];
  //const seller = ["din", "cof", "dsrt", "acol", "franc", "mini", "none", "study", "pc", "sing", "health", "hshop", "nail", "phone", "cloth", "test", "exer", "art", "sing"]
  //const group = ["allFree", "allCrea", "allSelf"]

  //const freeCate = ["Fav", "Sym", "QA", "Info", "Ex", "Re", "Rev", "Stu", "Tax"];
  //const creatorCate = ["Fav", "Sym", "QA", "Info", "Ex", "Re", "Rev", "Tax", "Man", "Coo"];
  //const SellerCate = ["Fav", "Sym", "QA", "Info", "Ex", "Re", "Rev", "Tax", "Man", "Emp"];

  /*const dbMaker = async () => {

    for (let i = 0; i < seller.length; i++) {
      for (let j = 0; j < SellerCate.length; j++) {
        await setDoc(doc(db, `${seller[i]}Cate`, `${seller[i]}${SellerCate[j]}`), {
          num: 1
        });
      }
    }
  };
  */

  /*const dbMaker3 = async () => {

    for (let i = 0; i < creatorCate.length; i++) {
        await setDoc(doc(db, 'allCreaCate', `allCrea${creatorCate[i]}`), {
          num: 1
        });   
    }
  };
  */

  /*const dbMaker2 = async () => {

    for (let i = 0; i < group.length; i++) {
        await setDoc(doc(db, "writingNum", group[i]), {
          num: 1
        });
    }
  }*/

  return (
    <Router>
      <Routes>
        <Route
          path="/"
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
          path="/login"
          element={<Login loginState={loginState} />}
        ></Route>
        <Route
          path="/profile"
          element={<Profile loginState={loginState} />}
        ></Route>
        <Route
          path="/community"
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
            />
          }
        ></Route>
        <Route
          path="/groupCommunity"
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
            />
          }
        ></Route>
        <Route
          path="/FAQ"
          element={
            <FAQ night={night} setNight={setNight} loginState={loginState} />
          }
        ></Route>
        <Route
          path="/Feedback"
          element={
            <Feedback
              night={night}
              setNight={setNight}
              loginState={loginState}
            />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default RouterCom;
