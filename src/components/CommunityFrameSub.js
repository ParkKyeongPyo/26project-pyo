import styles from "../CSS/login.module.css";
import Combar from "../components/Combar.js";
import Board from "../components/Board.js";

import { useState } from "react";

function CommunityFrameSub({ job, onWrite, onWriting, setWritingNum }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className={styles.flexCommunity2}>
      <Combar onWrite={onWrite} setSelectedCategory={setSelectedCategory} />
      {job === "All" && (
        <Board
          selectedCategory={selectedCategory}
          job={job}
          onWriting={onWriting}
          setWritingNum={setWritingNum}
        />
      )}
      {job === "개발자" && (
        <Board
          selectedCategory={selectedCategory}
          job={job}
          onWriting={onWriting}
          setWritingNum={setWritingNum}
        />
      )}
    </div>
  );
}

export default CommunityFrameSub;
