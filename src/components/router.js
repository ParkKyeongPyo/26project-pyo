import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Login from "../routes/Login";
import Profile from "../routes/Profile";
import Free from "../community/Free";
import Dev from "../community/Dev";
import Allfree from "../routes/Allfree";

import { useState, useEffect } from "react";

import { onAuthStateChanged } from "firebase/auth";
import { authService, db } from "../fbase";
import { doc, getDoc } from "firebase/firestore";

function RouterCom() {
  const [loginState, setLoginState] = useState(false);
  const [selectedJob, setSelectedJob] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [intro, setIntro] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    //Auth state observer
    onAuthStateChanged(authService, async (user) => {
      if (user) {
        const uid = user.uid;
        const protoEmail = user.email;
        setEmail(user.email);
        // ...
        setLoginState(true);

        const docRef = doc(db, "Profile", protoEmail);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const preProfile = docSnap.data();
          setAge(preProfile.age);
          setJob(preProfile.job);
          setIntro(preProfile.intro);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }

        if (userNickname === "") setUserNickname(uid);
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
        <Route
          path="/"
          element={
            <Home
              loginState={loginState}
              selectedJob={selectedJob}
              setSelectedJob={setSelectedJob}
            />
          }
        ></Route>
        <Route
          path="/login"
          element={<Login loginState={loginState} />}
        ></Route>
        <Route
          path="/profile"
          element={
            <Profile
              loginState={loginState}
              age={age}
              setAge={setAge}
              job={job}
              setJob={setJob}
              intro={intro}
              setIntro={setIntro}
              email={email}
              displayName={displayNasme}
              setDisplayName={setDisplayName}
            />
          }
        ></Route>
        <Route path="/allfree" element={<Allfree />}></Route>
      </Routes>
      <Routes>
        <Route path="/community/free" element={<Free />}></Route>
        <Route path="/community/dev" element={<Dev />}></Route>
      </Routes>
    </Router>
  );
}

export default RouterCom;
