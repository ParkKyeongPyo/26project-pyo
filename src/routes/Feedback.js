import { Input, Button, message } from "antd";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

import { db } from "../fbase.js";
import { collection, addDoc } from "firebase/firestore";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import fb from "../CSS/feedback.module.css";
const { TextArea } = Input;

const MemorizedMenuBar = React.memo(MenuBar);
const MemorizedFooter = React.memo(Footer);

function Feedback({ night, setNight, loginState }) {

  const [content, setContent] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    setContent(e.target.value);
  }

  const onClick = async () => {
    await addDoc(collection(db, "Feedback"), {
      content : content
    }).then(() => {
      message.success("소중한 의견 감사합니다:)");
      navigate("/")
    }).catch(() => {
      message.error("전송에 실패했습니다. 다시 시도해주세요.")
    })
  }

  return (
    <div className={fb.inherit}>
      <MemorizedMenuBar loginState={loginState} />
      <div className={fb.flex}>
        <div className={fb.h}>*에러/오류 및 건의사항*</div>
        <div className={fb.h2}>
          현재 테스트 기간으로 에러 및 오류가 발생할 수 있습니다.
        </div>
        <div className={fb.h2} style={{ marginBottom: "2%" }}>
          아래 해당사항이 있을 시 운영자에게 메세지 보내면 운영에 큰
          도움이 됩니다:)
        </div>
        <div className={fb.h3}>1. 에러/오류 사항</div>
        <div className={fb.h3}>
          2. 건의사항(이런 직업 추가됐으면 좋겠습니다, 이런 기능 있었으면 좋겠습니다
          등등)
        </div>
        <TextArea className={fb.textArea} rows={4} onChange={onChange} />
        <Button className={fb.btn} type="primary" onClick={onClick}>
          보내기
        </Button>
      </div>
      <MemorizedFooter />
    </div>
  );
}

export default Feedback;
