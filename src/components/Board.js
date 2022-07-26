import React from "react";
import { useState, useEffect } from "react";
import Pagination from "@mui/material/Pagination";
import board from "../CSS/board.module.css";

import "antd/dist/antd.min.css";
import { Link } from "react-router-dom";

import { db } from "../fbase.js";
import {
  getDocs,
  collection,
  doc,
  query,
  orderBy,
  limit,
  where,
  updateDoc,
} from "firebase/firestore";
import { authService } from "../fbase.js";

import Combar from "./Combar.js";
import Tables from "./Table.js";

/*
ajax 사용시에는 비동기로 처리 됨.
이 부분에서 개발자는 동기로 처리해야되는 부분을 async await로 처리
*/

/*
해결 못한 문제
1. 글 0개 또는 1개시 글넘버 못불러 오는 문제 (비동기에 따른 순서 문제)
*/
let data = [];

const MemorizedCombar = React.memo(Combar);
const MemorizedPagination = React.memo(Pagination);
const MemorizedTables = React.memo(Tables);

//게시판 component
function Board({ jobEng, selectedGroup, loginState, setWritingNum }) {
  const [pageSize, setPageSize] = useState(20);
  const [lastNum, setLastNum] = useState(1000000);
  const [favNum, setFavNum] = useState(1000000);
  const [cateNum, setCateNum] = useState(1000000);
  const [symNum, setSymNum] = useState(1000000);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cateChanged, setCateChanged] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [myWriting, setMyWriting] = useState(false);
  //첫 렌더링 후 직업 바뀌었으면 data에 빈 배열 넣고 한번더 렌더링 하기 위한 state
  const [render, setRender] = useState(false);

  const docRefs = doc(db, "혼자번당모든글", jobEng);
  const colRef = collection(docRefs, "Writing");

  const getListAllFirst = async (page) => {
    data = [];
    let itemsProcessed = 0;

    const q = query(
      colRef,
      where("num", "<=", lastNum - (page - 1) * pageSize),
      orderBy("num", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc, index, array) => {
      data.push({
        key: doc.data().num,
        글번호: doc.data().num,
        카테고리: doc.data().category,
        제목: (
          <div className={board.flex}>
            <Link
              className={board.link}
              to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
              title={doc.data().num}
              name={doc.data().count}
              key={doc.data().header}
              onClick={msg}
              onMouseOut={mouseOut}
            >
              {doc.data().header}
            </Link>
            <span className={board.replyCount}>[{doc.data().replyCount}]</span>
          </div>
        ),
        글쓴이: doc.data().user,
        작성일: doc.data().time.substr(0, 5),
        조회: doc.data().count,
        공감: doc.data().symCount,
      });
      itemsProcessed++;
      if (itemsProcessed === querySnapshot.docs.length)
        setLastNum(data[0].글번호);
    });
  };

  const getListAll = async (page) => {
    data = [];

    const q = query(
      colRef,
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
          <div className={board.flex}>
            <Link
              className={board.link}
              to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
              title={doc.data().num}
              name={doc.data().count}
              key={doc.data().header}
              onClick={msg}
              onMouseOut={mouseOut}
            >
              {doc.data().header}
            </Link>
            <span className={board.replyCount}>[{doc.data().replyCount}]</span>
          </div>
        ),
        글쓴이: doc.data().user,
        작성일: doc.data().time.substr(0, 5),
        조회: doc.data().count,
        공감: doc.data().symCount,
      });
    });
  };

  const getListCategory = async (page) => {
    data = [];
    const q = query(
      colRef,
      where("cateNum", "<=", cateNum - (page - 1) * pageSize),
      where("category", "==", selectedCategory),
      orderBy("cateNum", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);
    const dataLength = querySnapshot.docs.length;
    let itemsProcessed = 0;
    {
      dataLength !== 0 &&
        querySnapshot.forEach((doc) => {
          data.push({
            key: doc.data().num,
            글번호: doc.data().num,
            카테고리: doc.data().category,
            제목: (
              <div className={board.flex}>
                <Link
                  className={board.link}
                  to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
                  title={doc.data().num}
                  name={doc.data().count}
                  key={doc.data().header}
                  onClick={msg}
                  onMouseOut={mouseOut}
                >
                  {doc.data().header}
                </Link>
                <span className={board.replyCount}>
                  [{doc.data().replyCount}]
                </span>
              </div>
            ),
            카테고리글번호: doc.data().cateNum,
            글쓴이: doc.data().user,
            작성일: doc.data().time.substr(0, 5),
            조회: doc.data().count,
            공감: doc.data().symCount,
          });
          itemsProcessed++;
          if (itemsProcessed === dataLength) setCateNum(data[0].카테고리글번호);
        });
    }
  };

  //DB에서 공감글 가져오는 함수
  const getListSympathy = async (page) => {
    data = [];
    const q = query(
      colRef,
      where("symNum", "!=", 0),
      where("symNum", "<=", symNum - (page - 1) * pageSize),
      orderBy("symNum", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);
    const dataLength = querySnapshot.docs.length;
    let itemsProcessed = 0;
    {
      dataLength !== 0 &&
        querySnapshot.forEach((doc) => {
          data.push({
            key: doc.data().num,
            글번호: doc.data().num,
            카테고리: doc.data().category,
            제목: (
              <div className={board.flex}>
                <div className={board.iconPad}>
                  <div className={board.symIcon}></div>
                </div>
                <Link
                  className={board.link}
                  to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
                  title={doc.data().num}
                  name={doc.data().count}
                  key={doc.data().header}
                  onClick={msg}
                  onMouseOut={mouseOut}
                >
                  {doc.data().header}
                </Link>
                <span className={board.replyCount}>
                  [{doc.data().replyCount}]
                </span>
              </div>
            ),
            카테고리글번호: doc.data().cateNum,
            글쓴이: doc.data().user,
            작성일: doc.data().time.substr(0, 5),
            조회: doc.data().count,
            공감: doc.data().symCount,
            공감수: doc.data().symNum,
          });
          itemsProcessed++;
          if (itemsProcessed === dataLength) setSymNum(data[0].공감수);
        });
    }
  };

  const getListSympathyPageChanged = async (page) => {
    data = [];
    const q = query(
      colRef,
      where("symNum", "!=", 0),
      where("symNum", "<=", symNum - (page - 1) * pageSize),
      orderBy("symNum", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);
    const dataLength = querySnapshot.docs.length;
    {
      dataLength !== 0 &&
        querySnapshot.forEach((doc) => {
          data.push({
            key: doc.data().num,
            글번호: doc.data().num,
            카테고리: doc.data().category,
            제목: (
              <div className={board.flex}>
                <div className={board.iconPad}>
                  <div className={board.symIcon}></div>
                </div>
                <Link
                  className={board.link}
                  to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
                  title={doc.data().num}
                  name={doc.data().count}
                  key={doc.data().header}
                  onClick={msg}
                  onMouseOut={mouseOut}
                >
                  {doc.data().header}
                </Link>
                <span className={board.replyCount}>
                  [{doc.data().replyCount}]
                </span>
              </div>
            ),
            카테고리글번호: doc.data().cateNum,
            글쓴이: doc.data().user,
            작성일: doc.data().time.substr(0, 5),
            조회: doc.data().count,
            공감: doc.data().symCount,
            공감수: doc.data().symNum,
          });
        });
    }
  };

  //DB에서 내 글 불러오는 함수.
  const getListMyWriting = async (page) => {
    data = [];
    let itemsProcessed = 0;

    const email = authService.currentUser.email;

    const q = query(
      colRef,
      where("email", "==", email),
      orderBy("num", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);
    const dataLength = querySnapshot.docs.length;

    querySnapshot.forEach((doc) => {
      data.push({
        key: doc.data().num,
        글번호: doc.data().num,
        카테고리: doc.data().category,
        제목: (
          <div className={board.flex}>
            <div className={board.iconPad}>
              <div className={board.myIcon}></div>
            </div>
            <Link
              className={board.link}
              to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
              title={doc.data().num}
              name={doc.data().count}
              key={doc.data().header}
              onClick={msg}
              onMouseOut={mouseOut}
            >
              {doc.data().header}
            </Link>
            <span className={board.replyCount}>[{doc.data().replyCount}]</span>
          </div>
        ),
        글쓴이: doc.data().user,
        작성일: doc.data().time.substr(0, 5),
        조회: doc.data().count,
        댓글수: doc.data().replyCount,
        FavNum: doc.data().favNum,
        공감: doc.data().symCount,
      });
      itemsProcessed++;
      if (itemsProcessed === dataLength) setPageSize(15);
    });
  };

  const getListFavorite = async (page) => {
    data = [];
    let itemsProcessed = 0;

    const q = query(
      colRef,
      where("favNum", "!=", 0),
      where("favNum", "<=", favNum - (page - 1) * pageSize),
      orderBy("favNum", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({
        key: doc.data().num,
        글번호: doc.data().num,
        카테고리: doc.data().category,
        제목: (
          <div className={board.flex}>
            <div className={board.iconPad}>
              <div className={board.favIcon}></div>
            </div>
            <Link
              className={board.link}
              to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
              title={doc.data().num}
              name={doc.data().count}
              key={doc.data().header}
              onClick={msg}
              onMouseOut={mouseOut}
            >
              {doc.data().header}
            </Link>
            <span className={board.replyCount}>[{doc.data().replyCount}]</span>
          </div>
        ),
        글쓴이: doc.data().user,
        작성일: doc.data().time.substr(0, 5),
        조회: doc.data().count,
        댓글수: doc.data().replyCount,
        FavNum: doc.data().favNum,
        공감: doc.data().symCount,
      });
      itemsProcessed++;
      if (itemsProcessed === querySnapshot.docs.length) {
        setFavNum(data[0].FavNum);
      }
    });
  };

  const getListFavoritePageChanged = async (page) => {
    data = [];

    const q = query(
      colRef,
      where("favNum", "!=", 0),
      where("favNum", "<=", favNum - (page - 1) * pageSize),
      orderBy("favNum", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      data.push({
        key: doc.data().num,
        글번호: doc.data().num,
        카테고리: doc.data().category,
        제목: (
          <div className={board.flex}>
            <div className={board.iconPad}>
              <div className={board.favIcon}></div>
            </div>
            <Link
              className={board.link}
              to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
              title={doc.data().num}
              name={doc.data().count}
              key={doc.data().header}
              onClick={msg}
              onMouseOut={mouseOut}
            >
              {doc.data().header}
            </Link>
            <span className={board.replyCount}>[{doc.data().replyCount}]</span>
          </div>
        ),
        글쓴이: doc.data().user,
        작성일: doc.data().time.substr(0, 5),
        조회: doc.data().count,
        댓글수: doc.data().replyCount,
        FavNum: doc.data().favNum,
        공감: doc.data().symCount,
      });
    });
  };

  const getListPageChange = async (page) => {
    data = [];

    const q = query(
      colRef,
      where("category", "==", selectedCategory),
      where("cateNum", "<=", cateNum - (page - 1) * pageSize),
      orderBy("cateNum", "desc"),
      limit(pageSize)
    );

    const querySnapshot = await getDocs(q);
    const dataLength = querySnapshot.docs.length;
    {
      dataLength !== 0 &&
        querySnapshot.forEach((doc) => {
          data.push({
            key: doc.data().num,
            글번호: doc.data().num,
            카테고리: doc.data().category,
            제목: (
              <div className={board.flex}>
                <Link
                  className={board.link}
                  to={`/honjabundang/community/writing/${jobEng}/${doc.data().num}`}
                  title={doc.data().num}
                  name={doc.data().count}
                  key={doc.data().header}
                  onClick={msg}
                  onMouseOut={mouseOut}
                >
                  {doc.data().header}
                </Link>
                <span className={board.replyCount}>
                  [{doc.data().replyCount}]
                </span>
              </div>
            ),
            글쓴이: doc.data().user,
            작성일: doc.data().time.substr(0, 5),
            조회: doc.data().count,
            공감: doc.data().symCount,
          });
        });
    }
  };

  const getListPage = async (page) => {
    if (selectedCategory === "" || selectedCategory === "전체") {
      await getListAll(page);
    } else if (selectedCategory === "인기") {
      await getListFavoritePageChanged(page);
    } else if (selectedCategory === "공감") {
      await getListSympathyPageChanged(page);
    } else {
      await getListPageChange(page);
    }
  };

  const getListCate = async (page) => {
    if (selectedCategory === "전체") {
      await getListAllFirst(page);
    } else if (selectedCategory === "인기") {
      await getListFavorite(page);
    } else if (selectedCategory === "내 글") {
      await getListMyWriting(page);
    } else if (selectedCategory === "공감") {
      await getListSympathy(page);
    } else {
      await getListCategory(page);
    }
  };

  if (cateChanged) {
    getListCate(1);
    setCateChanged(false);
  }

  const asyncFn = async () => {
    await getListAllFirst(1);
  };

  useEffect(() => {
    data = [];
    asyncFn();
    setRender((prev) => !prev);
  }, [jobEng]);

  const onChange = async (event, page) => {
    await getListPage(page);
    setCurrentPage(page);
  };

  const mouseOver = (e) => {
    e.target.className = board.mouseOver;
  };

  const mouseOut = (e) => {
    e.target.className = board.mouseOut;
  };

  const msg = async (e) => {
    e.target.className = board.mouseOut;
    setWritingNum(e.target.title);

    //조회수 + 1
    const updateRef = doc(db, "혼자번당모든글", jobEng);
    const docSnap = doc(updateRef, "Writing", e.target.title);

    await updateDoc(docSnap, {
      count: Number(e.target.name) + 1,
    });
  };

  /*
   <MemorizedTable
        columns={columns}
        dataSource={[...data]}
        pagination={false}
        boardered="true"
         size="small"
      />
  */


  return (
    <>
      <MemorizedCombar
        setSelectedCategory={setSelectedCategory}
        setCateChanged={setCateChanged}
        setCurrentPage={setCurrentPage}
        setLastNum={setLastNum}
        setCateNum={setCateNum}
        setFavNum={setFavNum}
        setSymNum={setSymNum}
        selectedGroup={selectedGroup}
        loginState={loginState}
        setPageSize={setPageSize}
        setMyWriting={setMyWriting}
      />
      
      <MemorizedTables data={[...data]}/>

      {myWriting ? null : (
        <MemorizedPagination
          className={board.pagination}
          page={currentPage}
          size="small"
          count={100}
          onChange={onChange}
        />
      )}
    </>
  );
}

export default Board;
