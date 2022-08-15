import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import Community from "./Community";
import GroupCommunity from "../routes/GroupCommunity";
import FAQ from "../routes/FAQ";
import Feedback from "../routes/Feedback";

import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { onAuthStateChanged } from "firebase/auth";
import { authService, db } from "../fbase";
import { doc, setDoc } from "firebase/firestore";

let email = "";

function RouterCom() {
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
        const uid = user.uid;
        const protoEmail = user.email;
        email = user.email;

        // ...
        setLoginState(true);
      } else {
        // User is signed out
        // ...
        setLoginState(false);
      }
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

    for (let i = 0; i < seller.length; i++) {
        await setDoc(doc(db, "writingNum", seller[i]), {
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
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
              setSelectedJobEng={setSelectedJobEng}
              setSelectedGroup={setSelectedGroup}
              selectedGroup={selectedGroup}
              night={night}
              setNight={setNight}
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
        <Route path="*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </Router>
  );
}

export default RouterCom;
