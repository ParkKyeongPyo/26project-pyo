import { Table } from "antd";
import React from "react";
import { useState, useEffect } from "react";

import { db } from "../fbase.js";
import {
  getDocs,
  collection,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

const columns = [
  {
    title: "글번호",
    dataIndex: "글번호",
    width: 100,
  },
  {
    title: "카테고리",
    dataIndex: "카테고리",
    width: 150,
  },
  {
    title: "제목",
    dataIndex: "제목",
  },
  {
    title: "글쓴이",
    dataIndex: "글쓴이",
    width: 150,
  },
];

const data = [];

/*
1. 게시글 서버 컨셉
파이어베이스에 추가하자마자 바로 가져와서 data에 push
*/

//게시판 component
function Board({ selectedCategory, job }) {
  const [pageSize, setPageSize] = useState(20);

  const getList = async () => {
    const q = query(collection(db, job), orderBy("num", "desc"), limit(3));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      data.push({
        key: doc.data().num,
        글번호: doc.data().num,
        카테고리: doc.data().category,
        제목: doc.data().header,
        글쓴이: doc.data().user,
      });
    });
  };

  useEffect(() => {
    getList();
  }, []);

  
  console.log(data);
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: pageSize,
      }}
      boardered="true"
      size="small"
    />
  );
}

export default Board;
