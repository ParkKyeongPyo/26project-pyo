import React from "react";
import { Link } from "react-router-dom";

import menu from "../CSS/menu.module.css";

const MenuBar = () => {
    return (
      <div className={menu.flexMenus}>
        <div className={menu.menuDetail}>
          <span className={menu.logo}>
            <Link to="/">
              <img
                alt="혼자당"
                style={{ width: "30px", height: "30px" }}
                src="img/logonew.png"
              />
              혼자당
            </Link>
          </span>
          <span className={menu.logo}>
            <Link to="/honjadang">혼자번당</Link>
          </span>
        </div>
      </div>
    );
};

export default MenuBar;
