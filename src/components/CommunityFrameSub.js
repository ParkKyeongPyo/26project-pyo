import styles from "../CSS/login.module.css";
import Combar from "../components/Combar.js";
import Board from "../components/Board.js";
import Footer from "./Footer";

import { useState } from "react";
import React from "react";

function CommunityFrameSub({
  job,
  onWrite,
  onWriting,
  setWritingNum,
  jobEng,
  selectedGroup,
  loginState,
}) {
  console.log("1");

  return (
    <>
      <div className={styles.flexCommunity2}>
        <Board
          job={job}
          onWrite={onWrite}
          onWriting={onWriting}
          setWritingNum={setWritingNum}
          jobEng={jobEng}
          selectedGroup={selectedGroup}
          loginState={loginState}
        />
      </div>
      <Footer />
    </>
  );
}

export default CommunityFrameSub;
