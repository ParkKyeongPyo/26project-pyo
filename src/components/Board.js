import { Table } from "antd";
import React from "react";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import board from "../CSS/board.module.css";

import { db } from "../fbase.js";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
  where,
} from "firebase/firestore";

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
1. 게시글 서버 컨셉
파이어베이스에 추가하자마자 바로 가져와서 data에 push
*/
let data = [];

//게시판 component
function Board({ selectedCategory, job, onWriting, setWritingNum }) {
  const [pageSize, setPageSize] = useState(2);
  const [lastNum, setLastNum] = useState(1000000);
  const [pageChanged, setPageChanged] = useState(false);

  const getList = async (page) => {
    data = [];
    const q = query(
      collection(db, job),
      where("num", "<=", lastNum - (page - 1) * pageSize),
      orderBy("num", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({
        key: doc.data().num,
        글번호: doc.data().num,
        카테고리: doc.data().category,
        제목: (
          <span
            onClick={onWriting}
            onMouseOver={mouseOver}
            onMouseOut={mouseOut}
          >
            {doc.data().header}
          </span>
        ),
        글쓴이: doc.data().user,
      });
    });
    //페이지 바뀌었을 때 번호로 다음페이지 가져오기 위해 글번호 가져오기
  };

  const asyncFn = async () => {
    await getList(1);
    setLastNum(data[0].글번호);
  };

  useEffect(() => {
    asyncFn();
  }, []);

  const onChange = async (event, page) => {
    await getList(page);
    setPageChanged((prev) => !prev);
  };

  const mouseOver = (e) => {
    e.target.className = board.mouseOver;
  };

  const mouseOut = (e) => {
    e.target.className = board.mouseOut;
  };

  const rowSelection = {
    onSelect: onWriting,
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        pagination={false}
        boardered="true"
        size="small"
        rowSelection={rowSelection}
      />
      <Pagination
        count={10}
        variant="outlined"
        color="primary"
        onChange={onChange}
      />
    </>
  );
}

export default Board;
