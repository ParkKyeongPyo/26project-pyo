import styles from "../CSS/login.module.css";
import write from "../CSS/write.module.css";
import "antd/dist/antd.min.css";
import { Input, Button, message } from "antd";
import { Select } from "antd";

import { useState, useEffect } from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { db } from "../fbase.js";
import {
  collection,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";
import { authService, storage } from "../fbase.js";
import { ref, uploadBytes } from "firebase/storage";

import WriteCate from "./WriteCate";
import Footer from "./Footer";

const { Option } = Select;

/*
문제
1. devNum 새로고칭하면 초기화 됨
*/

function Write({
  setWrite,
  setCommunity,
  setWriting,
  job,
  onWriteFinish,
  jobEng,
  selectedGroup,
  userRN,
  loginState,
}) {
  const [category, setCategory] = useState("");
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");

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
    const docRef = doc(db, "WritingNum", jobEng);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Getting docSnap!");
    } else {
      console.log("No docSnap");
    }

    let jobCate = "";
    if (category === "Q&A") jobCate = jobEng + "QA";
    else if (category === "전체") jobCate = jobEng + "All";
    else if (category === "정보공유") jobCate = jobEng + "Info";
    else if (category === "경험공유") jobCate = jobEng + "Ex";
    else if (category === "현실고충") jobCate = jobEng + "Re";
    else if (category === "수익") jobCate = jobEng + "Rev";
    else if (category === "스터디&동아리") jobCate = jobEng + "Stu";
    else if (category === "세금&계약") jobCate = jobEng + "Tax";

    const cateRef = doc(db, "CateNum", jobCate);
    const cateNumSnap = await getDoc(cateRef);

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
    if (loginState) {
      await setDoc(doc(db, jobEng, `${docSnap.data().num}`), {
        num: docSnap.data().num,
        cateNum: cateNumSnap.data().num,
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
      await setDoc(doc(db, jobEng, `${docSnap.data().num}`), {
        num: docSnap.data().num,
        cateNum: cateNumSnap.data().num,
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

    await updateDoc(doc(db, "WritingNum", jobEng), {
      num: docSnap.data().num + 1,
    });

    //DB) 인기, 공감, 내 글 제외한 나머지 카테고리 num + 1.
    await updateDoc(doc(db, "CateNum", jobCate), {
      num: cateNumSnap.data().num + 1,
    });

    setWrite(false);
    setCommunity(true);
    setWriting(false);
  };

  useEffect(() => {
    setCategory("전체");
  }, []);

  return (
    <>
      <form className={styles.flexWrite} onSubmit={onSubmitCondition} >
        <div className={write.category}>
          <span>카테고리</span>
          <WriteCate selectedGroup={selectedGroup} setCategory={setCategory} />
        </div>

        <br />

        <Input
          key="header"
          onChange={onChange}
          style={{ width: "500px" }}
          placeholder="제목"
        />

        <br />
        <br />

        <div className={write.font}>
          *사진, 미디어 삽입, 인용, 표 기능은 아직 이용 불가능하니 참고바랍니다.
        </div>

        <CKEditor
          key="content"
          height="1000px"
          width="100%"
          min
          editor={ClassicEditor}
          onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            console.log("Editor is ready to use!", editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setContent(data);
          }}
          onBlur={(event, editor) => {
            //console.log("Blur.", editor);
          }}
          onFocus={(event, editor) => {
            //console.log("Focus.", editor);
          }}
        />

        <br />

        <div className={write.btnMargin}>
          <Button
            size="large"
            type="primary"
            htmlType="button"
            className={write.btnMarginRight}
            onClick={onWriteFinish}
          >
            취소
          </Button>
          <Button
            className={write.btn}
            size="large"
            type="primary"
            htmlType="submit"
          >
            저장
          </Button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Write;
