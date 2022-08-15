import React from "react";
import { Link } from "react-router-dom";

import menu from "../CSS/menu.module.css";

const CommunityMenuBar = ({
  job,
  selectedGroup,
  loginState,
  selectedJobEng,
}) => {
  if (loginState) {
    return (
      <div className={menu.flexMenus}>
        <div className={menu.menuDetail}>
          <span className={menu.logo}>
            <Link to="/">
              <img style={{ width: "30px", height: "30px" }} src="img/dd.png" />
              혼자번당
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
        \
        <div className={menu.menuDetail}>
          <Link className={menu.logo} to="/">
            <img style={{ width: "30px", height: "30px" }} src="img/dd.png" />
            혼자번당
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
