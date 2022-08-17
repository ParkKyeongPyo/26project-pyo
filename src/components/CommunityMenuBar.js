import React from "react";
import { Link } from "react-router-dom";

import menu from "../CSS/menu.module.css";

const CommunityMenuBar = ({
  job,
  selectedGroup,
  loginState,
}) => {
  if (loginState) {
    return (
      <div className={menu.flexMenus}>
        <div className={menu.menuDetail}>
          <span className={menu.logo}>
            <Link to="/">
              <img alt="워크얼론" style={{ width: "30px", height: "30px" }} src="img/logo2.png" />
              WorkAlone
            </Link>
          </span>
          <span className={menu.flexItem}>
            <Link to="/groupCommunity">All {selectedGroup}</Link>
          </span>
          <span className={menu.flexItem}>
            <Link to="/community">{job}</Link>
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
          <Link className={menu.logo} to="/">
            <img alt="워크얼론" style={{ width: "30px", height: "30px" }} src="img/logo2.png" />
            WorkAlone
          </Link>

          <span className={menu.flexItem}>
            <Link to="/groupCommunity">All {selectedGroup}</Link>
          </span>
          <span className={menu.flexItem}>
            <Link to="/community">{job}</Link>
          </span>
          <span className={menu.flexItemLast}>
            <Link to="/login">로그인</Link>
          </span>
        </div>
      </div>
    );
  }
};

export default CommunityMenuBar;
