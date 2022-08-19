import { Link } from "react-router-dom";

import menu from "../CSS/menu.module.css";

const CommunityMenuBar = ({ job, selectedGroup }) => {
  return (
    <div className={menu.flexMenus}>
      <div className={menu.menuDetail}>
        <span className={menu.logo}>
          <Link to="/">
            혼자당
          </Link>
        </span>
        <span className={menu.logoMargin}>
          <Link to="/honjabundang">
            혼자번당
          </Link>
        </span>
        <span className={menu.flexItem}>
          <Link to="/honjabundang/groupCommunity">All {selectedGroup}</Link>
        </span>
        <span className={menu.flexItem}>
          <Link to="/honjabundang/community">{job}</Link>
        </span>
      </div>
    </div>
  );
};

export default CommunityMenuBar;
