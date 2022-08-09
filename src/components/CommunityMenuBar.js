import React from "react";
import { Link } from "react-router-dom";

import menu from "../CSS/menu.module.css";

const CommunityMenuBar = ({
  job,
  selectedGroup,
  loginState,
  selectedJobEng
}) => {

  if (loginState) {
    return (
      <div className={menu.flexMenus}>
        <span className={menu.flexItem}>
          <Link to="/">로고</Link>
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
    );
  } else {
    return (
      <div className={menu.flexMenus}>
        <Link className={menu.flexItem} to="/">
          로고
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
    );
  }
};

export default CommunityMenuBar;
