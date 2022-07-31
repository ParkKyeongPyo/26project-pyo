import styles from "../CSS/login.module.css";
import Combar from "../components/Combar.js";
import Board from "../components/Board.js";

import { useState } from "react";
import React from "react";

function CommunityFrameSub({ job, onWrite, onWriting, setWritingNum }) {
  console.log("1");

  return (
    <div className={styles.flexCommunity2}>
      <Board
        job={job}
        onWrite={onWrite}
        onWriting={onWriting}
        setWritingNum={setWritingNum}
      />
    </div>
  );
}

export default CommunityFrameSub;
