import { Table, message } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import board from "../CSS/board.module.css";

import styles from "../CSS/login.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";
import Frame from "../CSS/communityFrame.module.css";

import { db } from "../fbase.js";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";
import { setCurrentScreen } from "firebase/analytics";

const columns = [
  {
    title: "글번호",
    dataIndex: "글번호",
    width: 80,
  },
  {
    title: "카테고리",
    dataIndex: "카테고리",
    width: 80,
  },
  {
    title: "제목",
    dataIndex: "제목",
  },
  {
    title: "글쓴이",
    dataIndex: "글쓴이",
    width: 80,
  },
];

/*
ajax 사용시에는 비동기로 처리 됨.
이 부분에서 개발자는 동기로 처리해야되는 부분을 async await로 처리
*/

/*
해결 못한 문제
1. 글 0개 또는 1개시 글넘버 못불러 오는 문제 (비동기에 따른 순서 문제)
*/
let data = [];

//게시판 component
function Board({ job, onWrite, onWriting, setWritingNum }) {
  const [pageSize, setPageSize] = useState(2);
  const [lastNum, setLastNum] = useState(1000000);
  //const [pageChanged, setPageChanged] = useState(false);
  const [change, setChange] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cateChanged, setCateChanged] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  console.log("2");

  const getListAll = async (page) => {
    data = [];
    const q = query(
      collection(db, job),
      where("num", "<=", lastNum - (page - 1) * pageSize),
      orderBy("num", "desc"),
      limit(pageSize)
    );
      
    console.log("lastNum : ", lastNum);
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      data.push({
        key: doc.data().num,
        글번호: doc.data().num,
        카테고리: doc.data().category,
        제목: (
          <span onClick={msg} onMouseOver={mouseOver} onMouseOut={mouseOut}>
            {doc.data().header}
          </span>
        ),
        글쓴이: doc.data().user,
      });
    });
    //페이지 바뀌었을 때 번호로 다음페이지 가져오기 위해 글번호 가져오기

    console.log("5a");
  };

  const getListCategory = async (page) => {
    data = [];
    const q = query(
      collection(db, job),
      where("category", "==", selectedCategory),
      where("num", "<=", lastNum - (page - 1) * pageSize),
      orderBy("num", "desc"),
      limit(pageSize)
    );

    console.log("lastNum : ", lastNum);
    const querySnapshot = await getDocs(q);
    console.log("why")
    querySnapshot.forEach((doc) => {
      data.push({
        key: doc.data().num,
        글번호: doc.data().num,
        카테고리: doc.data().category,
        제목: (
          <span onClick={msg} onMouseOver={mouseOver} onMouseOut={mouseOut}>
            {doc.data().header}
          </span>
        ),
        글쓴이: doc.data().user,
      });
    });
    console.log("5b");
    //페이지 바뀌었을 때 번호로 다음페이지 가져오기 위해 글번호 가져오기
  };

  const getList = async (page) => {
    if (selectedCategory === "" || selectedCategory === "전체") {
      console.log("4a");
      await getListAll(page);
    } else {
      console.log("4b");
      await getListCategory(page);
    }
  };

  const cateChange = async () => {
    if (cateChanged) {
      console.log("3");
      
      await getList(1);
      setCateChanged(false);
      setLastNum(data[0].글번호);
    }
  };

  cateChange();

  const asyncFn = async () => {
    await getList(1);
    setLastNum(data[0].글번호);
  };

  useEffect(() => {
    asyncFn();
  }, []);

  const onChange = async (event, page) => {
    await getList(page);
    setCurrentPage(page);
    //setPageChanged((prev) => !prev);
  };

  const mouseOver = (e) => {
    e.target.className = board.mouseOver;
  };

  const mouseOut = (e) => {
    e.target.className = board.mouseOut;
  };

  const msg = () => {
    message.info("게시글 페이지에 접속하려면 왼쪽 박스를 클릭하세요!");
  };

  const rowSelection = {
    onSelect: onWriting,
    hideSelectAll: true,
  };

  const onClick = (e) => {
    setSelectedCategory(e.target.innerText);
    setCateChanged(true);
    setCurrentPage(1);
    setLastNum(10000000);
  };

  console.log(10);
  console.log(data);

  return (
    <>
      <div className={styles.flexThinBar}>
        <div>
          <Button onClick={onClick}>전체</Button>
          <Button onClick={onClick}>인기</Button>
        </div>
        <div>
          <span className={Frame.middleBtn} onClick={onClick}>
            Q&A
          </span>
          <span className={Frame.middleBtn} onClick={onClick}>
            정보
          </span>
          <span className={Frame.middleBtn} onClick={onClick}>
            현실고충
          </span>
          <span className={Frame.middleBtn} onClick={onClick}>
            스터디l동아리 모집
          </span>
          <span className={Frame.middleBtn} onClick={onClick}>
            경험
          </span>
          <span className={Frame.middleBtn} onClick={onClick}>
            수익
          </span>
        </div>
        <div>
          <Button onClick={onWrite}>글쓰기</Button>
        </div>
      </div>
      <Table
        columns={columns}
        dataSource={[...data]}
        pagination={false}
        boardered="true"
        size="small"
        rowSelection={rowSelection}
      />
      {console.log(data)}
      <Pagination
        page={currentPage}
        count={10}
        onChange={onChange}
      />
      {console.log("currentPage: ", currentPage)}
    </>
  );
}

export default Board;
