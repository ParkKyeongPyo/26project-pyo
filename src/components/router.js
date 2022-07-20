import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Jobchosing from "../routes/Jobchosing";
import Profile from "../routes/Profile";
import Free from "../community/Free";
import Dev from "../community/Dev";

import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { authService } from "../fbase";

function RouterCom() {
  const [loginState, setLoginState] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");

  useEffect(() => {
    //Auth state observer
    onAuthStateChanged(authService, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        setLoginState(true);
      } else {
        // User is signed out
        // ...
        setLoginState(false);
      }
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home loginState={loginState} />}></Route>
        <Route
          path="/login"
          element={<Login loginState={loginState} />}
        ></Route>
        <Route
          path="/profile"
          element={<Profile loginState={loginState} />}
        ></Route>
        <Route
          path="/Jobchosing"
          element={
            <Jobchosing
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
              loginState={loginState}
            />
          }
        ></Route>
      </Routes>
      <Routes>
        <Route path="/community/free" element={<Free selectedJob={selectedJob} />}></Route>
        <Route path="/community/dev" element={<Dev />}></Route>
      </Routes>
    </Router>
  );
}

export default RouterCom;
