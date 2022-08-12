import MenuBar from "../components/MenuBar";
import FloatingBtn from "../components/FloatingBtn";
import Footer from "../components/Footer";

import faq from "../CSS/faq.module.css";

import { useSpring, animated } from "react-spring";

function FAQ({ night, setNight, loginState }) {
  const animation1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <div>
      <MenuBar loginState={loginState} />
      <FloatingBtn night={night} setNight={setNight} />
      <animated.div className={faq.flex} style={animation1}>
        <div className={faq.heading}>Q. 에러/오류가 있어요.</div>
        <div>
          A. 현재 테스트 기간이라 에러/오류가 잦을 수 있는 점 양해 부탁드립니다.
          아래 이메일로 연락주시면 감사하겠습니다:)
        </div>

        <br />
        <br />

        <div className={faq.heading}>
          Q. 글쓰기, 글 페이지에서 뒤로가기시 홈으로 돌아와요.
        </div>
        <div>
          A. 개발 효율을 위해 최대한 페이지를 줄이면서 나타나는 현상이며 오른쪽
          상단에 있는 자체 뒤로가기 버튼을 이용해주시기 바랍니다.
        </div>

        <br />
        <br />

        <div className={faq.heading}>
          Q. 사진 및 미디어 삽입, 인용, 표 기능이 안되요.
        </div>
        <div>
          A. 테스트 기간에는 사진 및 미디어 삽입, 인용, 표 기능은 이용할 수
          없으며 추후 도입할 예정입니다.
        </div>

        <br />
        <br />

        <div className={faq.heading}>
          Q. 제 직업이 혼자번당에 없어요. 추가 됐으면 좋겠어요.
        </div>
        <div>
          A. 건의사항 및 에러/오류는 아래 이메일로 연락주시면 감사하겠습니다:)
        </div>

        <br />
        <br />

        <div className={faq.heading}>Q. 꼭 회원가입을 해야하나요?</div>
        <div>
          A. 로그인한 유저는 내 글보기 기능, 공감 기능을 이용하실 수 있습니다.
        </div>
      </animated.div>
      <Footer />
    </div>
  );
}

export default FAQ;
