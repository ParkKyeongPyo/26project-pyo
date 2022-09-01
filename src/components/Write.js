import styles from "../CSS/login.module.css";
import write from "../CSS/write.module.css";
import "antd/dist/antd.min.css";
import { Input, Button, message } from "antd";

import React, { useState } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { db } from "../fbase.js";
import { doc, getDoc, updateDoc, setDoc, collection } from "firebase/firestore";
import { authService } from "../fbase.js";

import WriteCate from "./WriteCate";

import { useNavigate } from "react-router-dom";

const MemorizedWriteCate = React.memo(WriteCate);
/*
문제
1. devNum 새로고칭하면 초기화 됨
*/

function Write({
  setWrite,
  setCommunity,
  setWriting,
  job,
  jobEng,
  selectedGroup,
  userRN,
  loginState,
}) {
  const [category, setCategory] = useState("전체");
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    setHeader(e.target.value);
  };

  const handleChange = (value) => {
    setCategory(value);
  };

  //제목과 내용입력 확인 로직
  const onSubmitCondition = () => {
    if (header === "" || content === "") {
      message.error("제목 또는 내용을 입력해주세요.");
    } else {
      onSubmit();
    }
  };

  //글 제출.
  const onSubmit = async () => {
    const docRef = doc(db, "혼자번당글번호", jobEng);
    const docSnap = await getDoc(docRef);

    //Man == Manage, CoW == Cowork, Wkr === Worker
    let jobCate = "";
    if (category === "Q&A") jobCate = jobEng + "QA";
    else if (category === "정보공유") jobCate = jobEng + "Info";
    else if (category === "경험공유") jobCate = jobEng + "Ex";
    else if (category === "현실고충") jobCate = jobEng + "Re";
    else if (category === "수익") jobCate = jobEng + "Rev";
    else if (category === "스터디&동아리") jobCate = jobEng + "Stu";
    else if (category === "세금&계약") jobCate = jobEng + "Tax";
    else if (category === "운영") jobCate = jobEng + "Man";
    else if (category === "협업") jobCate = jobEng + "Coo";
    else if (category === "직원&알바") jobCate = jobEng + "Emp";

    let cateNumSnap = "";
    let cateNum = 0;

    if (category !== "전체") {
      const cateRef = doc(db, "혼자번당", `${jobEng}Cate`);
      cateNumSnap = await getDoc(cateRef);
      cateNum = cateNumSnap.data()[jobCate];
    }

    //로그인 유무에 따라서 익명 또는 displayName author에 넣기.
    let writerName = "";
    let email = "";

    if (loginState) {
      const user = authService.currentUser;
      writerName = user.displayName;
      email = user.email;
    } else {
      writerName = userRN;
    }

    const date = new Date();

    //DB에 글 저장하기.
    //로그인 사용자면 email 정보 추가

    const docRefs = doc(db, "혼자번당모든글", jobEng);
    const docSubRef = doc(docRefs, "Writing", `${docSnap.data().num}`);

    if (loginState) {
      await setDoc(docSubRef, {
        num: docSnap.data().num,
        cateNum: cateNum,
        user: writerName,
        email: email,
        header: header,
        category: category,
        content: content,
        symCount: 0,
        symArray: [],
        symNum: 0,
        count: 0,
        time: `${("0" + date.getHours()).slice(-2)}:${(
          "0" + date.getMinutes()
        ).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`,
        date: `${("0" + (date.getMonth() + 1)).slice(-2)}-${(
          "0" + date.getDate()
        ).slice(-2)}`,
        year: `${date.getFullYear()}`,
        replyCount: 0,
        favNum: 0,
        reply: [],
      });
    } else {
      await setDoc(docSubRef, {
        num: docSnap.data().num,
        cateNum: cateNum,
        user: writerName,
        header: header,
        category: category,
        content: content,
        symNum: 0,
        symCount: 0,
        symArray: [],
        count: 0,
        time: `${("0" + date.getHours()).slice(-2)}:${(
          "0" + date.getMinutes()
        ).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`,
        date: `${("0" + (date.getMonth() + 1)).slice(-2)}-${(
          "0" + date.getDate()
        ).slice(-2)}`,
        year: `${date.getFullYear()}`,
        replyCount: 0,
        favNum: 0,
        reply: [],
      });
    }

    await updateDoc(doc(db, "혼자번당글번호", jobEng), {
      num: docSnap.data().num + 1,
    });

    //DB) 인기, 공감, 내 글 제외한 나머지 카테고리 num + 1.
    if (category !== "전체") {
      await updateDoc(doc(db, "혼자번당", `${jobEng}Cate`), {
        [jobCate]: cateNum + 1,
      });
    }

    navigate("/honjabundang/community");
  };

  /*
  useEffect(() => {
    setCategory("전체");
  }, []);
*/
  return (
    <>
      <form className={styles.flexWrite}>
        <div className={write.category}>
          <span>카테고리</span>
          <MemorizedWriteCate
            selectedGroup={selectedGroup}
            setCategory={handleChange}
          />
        </div>

        <br />

        <Input
          key="header"
          onChange={onChange}
          style={{ width: "70%" }}
          placeholder="제목"
        />

        <br />
        <br />

        <div className={write.font}>
          *Bold, 사진, 미디어 삽입, 인용, 표 기능은 아직 이용 불가능하니
          참고바랍니다. <br/>
          *Shift+Enter키를 누르면 줄바꿈이 됩니다.
        </div>

        <CKEditor
          key="content"
          height="1000px"
          width="100%"
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
        />

        <br />

        <div className={write.btnMargin}>
          <Button
            className={write.btn}
            size="large"
            type="primary"
            htmlType="button"
            onClick={onSubmitCondition}
          >
            저장
          </Button>
        </div>
      </form>
    </>
  );
}

export default Write;
