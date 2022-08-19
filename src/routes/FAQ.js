import MenuBarHome from "../components/MenuBarHome";
import Footer from "../components/Footer";

import faq from "../CSS/faq.module.css";

import React from "react";

const MemorizedMenuBarHome = React.memo(MenuBarHome);
const MemorizedFooter = React.memo(Footer);

function FAQ({ loginState }) {
  return (
    <div>
      <MemorizedMenuBarHome loginState={loginState} />

      <div className={faq.flex}>
        <div className={faq.heading}>Q. 에러/오류가 있어요.</div>
        <div>
          A. 현재 테스트 기간이라 에러/오류가 잦을 수 있는 점 양해 부탁드립니다.
          오류/건의사항 탭에서 운영자에게 메세지를 보내주시면 운영에 큰 도움이 됩니다. (로그인 유저만 가능)
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
          Q. 제 직업이 없어요. 추가 해주셨으면 좋겠어요.
        </div>
        <div>
          A. 건의사항은 에러/건의사항 탭에서 운영자에게 메세지를 보내주시면
          됩니다. (로그인 유저만 가능)
        </div>

        <br />
        <br />

        <div className={faq.heading}>Q. 꼭 회원가입을 해야하나요?</div>
        <div>
          A. 로그인한 유저는 내 글보기, 공감, 에러/건의사항 탭을 이용하실 수 있습니다.
        </div>
      </div>
      <MemorizedFooter />
    </div>
  );
}

export default FAQ;
