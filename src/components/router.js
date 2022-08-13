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
import { doc, getDoc } from "firebase/firestore";

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
