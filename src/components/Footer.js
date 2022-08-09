import footer from "../CSS/footer.module.css";

function Footer() {
  return (
    <footer className={footer.flex}>
      <div className={footer.item}>Copyright © 2022 workalone. All rights reserved.</div>
      <div className={footer.item}>문의 : as8798as@gmail.com</div>
    </footer>
  );
}

export default Footer;
