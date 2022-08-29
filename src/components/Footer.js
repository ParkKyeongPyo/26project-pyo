import footer from "../CSS/footer.module.css";

import { Popover } from "antd";

function Footer() {
  const content = () => {
    return (
      <>
        <a
          className={footer.icon}
          href="https://www.flaticon.com/kr/free-icons/-"
          title="특히 잘하는 아이콘"
        >
          특히 잘하는 아이콘 제작자: Freepik - Flaticon,
        </a>
        <a
          href="https://www.flaticon.com/kr/free-icons/"
          title="불꽃 아이콘"
          className={footer.icon}
        >
          &nbsp;불꽃 아이콘 제작자: DinosoftLabs - Flaticon,
        </a>
        <a
          href="https://www.flaticon.com/kr/free-icons/"
          title="함께 아이콘"
          className={footer.icon}
        >
          &nbsp;함께 아이콘 제작자: Good Ware - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/kr/free-icons/"
          title="프로필 아이콘"
          className={footer.icon}
        >
          &nbsp;프로필 아이콘 제작자: Freepik - Flaticon
        </a>
        <br />
        <a
          href="https://www.flaticon.com/kr/free-icons/"
          className={footer.icon}
          title="아파트 아이콘"
        >
          아파트 아이콘 제작자: Darius Dan - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/kr/free-icons/"
          className={footer.icon}
          title="바닷가 아이콘"
        >
          바닷가 아이콘 제작자: Flat Icons - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/kr/free-icons/"
          className={footer.icon}
          title="일 아이콘"
        >
          일 아이콘 제작자: Flat Icons - Flaticon
        </a>
        <a
          className={footer.icon}
          href="https://www.flaticon.com/kr/free-icons/-"
          title="- 아이콘"
        >
          - 아이콘 제작자: Freepik - Flaticon
        </a>
      </>
    );
  };

  return (
    <footer className={footer.flex}>
      <div className={footer.frame}>
        <div className={footer.item}>
          Copyright © 2022.08. 혼자당. All rights reserved.
        </div>
        <div className={footer.item}>
          혼자당 홈페이지 무단 도용 및 관련 저작권 침해시 법적 조치를 받을 수
          있습니다.
        </div>
        <div className={footer.item}>문의 : as8798as@gmail.com</div>
        <div className={footer.icon}>
          <Popover
            content={content}
            iconItem
            title="아이콘 저작권자"
            trigger="hover"
          >
            아이콘 저작권
          </Popover>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
