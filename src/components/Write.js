import styles from "../CSS/login.module.css";
import write from "../CSS/write.module.css";
import "antd/dist/antd.min.css";
import { Input, Button } from "antd";
import { Select } from "antd";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

import { db } from "../fbase.js";
import { doc, setDoc } from "firebase/firestore";

const { Option } = Select;

/*
문제
1. devNum 새로고칭하면 초기화됨
2. 서버로 보낼때 firebase 오류 생김
*/

function Write() {
  const [category, setCategory] = useState("");
  const [header, setHeader] = useState("");
  const [content, setContent] = useState("");
  const [devNum, setDevNum] = useState(1);

  const navigate = useNavigate();

  const onChange = (e) => {
    setHeader(e.target.value);
  };

  const handleChange = (value) => {
    setCategory(value);
  };

  const onSubmit = async () => {
    await setDoc(doc(db, "개발자", category), {
      DevNum: devNum,
      header: header,
      content: content,
      reply: [],
    });

    setDevNum((prev) => prev + 1);
    navigate("/community/alldev");
  };

  return (
    <form className={styles.flexWrite} onSubmit={onSubmit}>
      <div className={write.category}>
        <span>카테고리</span>
        <Select
          defaultValue="일반"
          style={{
            width: 200,
          }}
          onChange={handleChange}
        >
          <Option value="일반">일반</Option>
          <Option value="Q&A">Q&A</Option>
          <Option value="정보">정보</Option>
          <Option value="현실고충">현실고충</Option>
          <Option value="스터디/동아리 모집">스터디/동아리 모집</Option>
          <Option value="경험">경험</Option>
          <Option value="수익">수익</Option>
        </Select>
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
        >
          취소
        </Button>
        <Button type="primary" htmlType="submit">
          저장
        </Button>
      </div>
    </form>
  );
}

export default Write;
