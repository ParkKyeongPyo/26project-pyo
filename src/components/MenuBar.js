import React from "react";
import { Link } from "react-router-dom";

import menu from "../CSS/menu.module.css";

const MenuBar = ({ loginState }) => {
  if (loginState) {
    return (
      <div className={menu.flexMenus}>
        <div className={menu.menuDetail}>
          <span className={menu.logo}>
            <Link to="/">
              <img alt="워크얼론 로고" style={{ width: "30px", height: "30px" }} src="img/logo2.png" />
              워크얼론
            </Link>
          </span>
          <span className={menu.flexItem}>
            <Link to="/FAQ">FAQ</Link>
          </span>
          <span className={menu.flexItem}>
            <Link to="/Feedback">에러/건의사항</Link>
          </span>
          <span className={menu.flexItemLast}>
            <Link to="/profile">프로필</Link>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className={menu.flexMenus}>
        <div className={menu.menuDetail}>
          <span className={menu.logo}>
            <Link to="/">
              <img alt="워크얼론 로고" style={{ width: "30px", height: "30px" }} src="img/logo2.png" />
              워크얼론
            </Link>
          </span>
          <span className={menu.flexItem}>
            <Link to="/FAQ">FAQ</Link>
          </span>
          <span className={menu.flexItemLast}>
            <Link to="/login">로그인</Link>
          </span>
        </div>
      </div>
    );
  }
};

export default MenuBar;
