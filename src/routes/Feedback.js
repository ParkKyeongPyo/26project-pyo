import { Input, Button } from "antd";
import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";
import FloatingBtn from "../components/FloatingBtn";

import fb from "../CSS/feedback.module.css";
const { TextArea } = Input;

function Feedback({ night, setNight, loginState }) {
  return (
    <div className={fb.inherit}>
      <MenuBar loginState={loginState} />
      <FloatingBtn night={night} setNight={setNight} />
      <div className={fb.flex}>
        <div className={fb.h}>*에러/오류 및 건의사항*</div>
        <div className={fb.h2}>
          아래 해당사항이 있을 시 운영자에게 메세지를 보낼 수 있습니다.
        </div>
        <div className={fb.h3}>1. 에러/오류 사항</div>
        <div className={fb.h3}>
          2. 건의(이런 직업 추가됐으면 좋겠습니다, 이런 기능 있었으면 좋겠습니다
          등등)
        </div>
        <TextArea className={fb.textArea} rows={4} />
        <Button className={fb.btn} type="primary">
          보내기
        </Button>
      </div>
      <Footer />
    </div>
  );
}

export default Feedback;
