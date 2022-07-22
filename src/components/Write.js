import styles from "../CSS/login.module.css";
import { Input, Button } from "antd";
import "antd/dist/antd.min.css";

const { TextArea } = Input;

function Write() {
  return (
    <div className={styles.flexWrite}>
      <div style={{ width: "500px" }}>
        <Input placeholder="제목" />
      </div>
      <div>
        음란물, 차별, 비하, 혐오 및 초상권, 저작권 침해 게시물은 민, 형사상의
        책임을 질 수 있습니다. [저작권법 안내] [게시물 활용 안내]
      </div>
      <div style={{ width: "80%", height: "40%" }}>
        <input style={{ width: "100%", height: "100%" }}></input>
      </div>
      <div>
        <Button type="primary">저장</Button>
      </div>
    </div>
  );
}

export default Write;
