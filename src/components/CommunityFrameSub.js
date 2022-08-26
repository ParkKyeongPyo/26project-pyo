import styles from "../CSS/login.module.css";
import Board from "../components/Board.js";

import React, { useEffect } from "react";

import Footer from "./Footer";


function CommunityFrameSub({
  job,
  jobEng,
  selectedGroup,
  loginState,
  setH,
  setC,
  setWritingNum
}) {
  useEffect(() => {
    if (job === "") {
      setH(`${selectedGroup} 커뮤니티 - 혼자번당`);
      setC(
        `${selectedGroup} 커뮤니티에서 같은 일을 하는 사람들과 소통하고 배우고 나누며 성장해보세요!`
      );
    } else {
      if (selectedGroup === "자영업자") {
        setH(`${job} 사장님 커뮤니티 - 혼자번당`);
        setC(
          `${selectedGroup} ${job} 사장님 커뮤니티에서 같은 일을 하는 사람들과 소통하고 배우고 나누며 성장해보세요!`
        );
      } else {
        setH(`${job} 커뮤니티 - 혼자번당`);
        setC(
          `${selectedGroup} ${job} 커뮤니티에서 같은 일을 하는 사람들과 소통하고 배우고 나누며 성장해보세요!`
        );
      }
    }
  }, []);

  return (
    <>
      <div className={styles.flexCommunity2}>
        <Board
          jobEng={jobEng}
          selectedGroup={selectedGroup}
          loginState={loginState}
          setWritingNum={setWritingNum}
        />
      </div>
    </>
  );
}

export default CommunityFrameSub;
