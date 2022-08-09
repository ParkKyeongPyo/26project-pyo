import styles from "../CSS/login.module.css";
import write from "../CSS/write.module.css";
import "antd/dist/antd.min.css";
import { Input, Button } from "antd";
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
import { authService } from "../fbase.js";

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

    if (loginState) {
      const user = authService.currentUser;
      const displayName = user.displayName;
      writerName = displayName;
    } else {
      writerName = userRN;
    }

    const date = new Date();

    //DB에 글 저장하기.
    await setDoc(doc(db, jobEng, `${docSnap.data().num}`), {
      num: docSnap.data().num,
      cateNum: cateNumSnap.data().num,
      user: writerName,
      header: header,
      category: category,
      content: content,
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

    await updateDoc(doc(db, "WritingNum", jobEng), {
      num: docSnap.data().num + 1,
    });

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
      <form className={styles.flexWrite} onSubmit={onSubmit}>
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

        <div className={write.watch}>
          음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민, 형사상의
          책임을 질 수 있습니다. [저작권법 안내] [게시물 활용 안내]
        </div>

        <br />

        <CKEditor
          key="content"
          height="1000px"
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
            type="primary"
            htmlType="button"
            className={write.btnMarginRight}
            onClick={onWriteFinish}
          >
            취소
          </Button>
          <Button type="primary" htmlType="submit">
            저장
          </Button>
        </div>
      </form>
      <Footer />
    </>
  );
}

export default Write;
