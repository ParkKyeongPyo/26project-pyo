import footer from "../CSS/footer.module.css";

function Footer() {
  return (
    <footer className={footer.flex}>
      <div className={footer.item}>
        Copyright © 2022 workalone. All rights reserved.
      </div>
      <div className={footer.item}>문의 : as8798as@gmail.com</div>
      <div className={footer.icon}>
        아이콘 :&nbsp; 
        <a
        className={footer.icon}
          href="https://www.flaticon.com/kr/free-icons/-"
          title="특히 잘하는 아이콘"
        >
          특히 잘하는 아이콘 제작자: Freepik - Flaticon,
        </a>
        <a href="https://www.flaticon.com/kr/free-icons/" title="불꽃 아이콘" className={footer.icon}>
        &nbsp;불꽃 아이콘 제작자: DinosoftLabs - Flaticon
        </a>
      </div>
    </footer>
  );
}

export default Footer;
