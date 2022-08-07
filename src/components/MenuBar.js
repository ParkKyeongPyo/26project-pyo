import { Menu } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import menu from "../CSS/menu.module.css";

const MenuBar = ({ loginState }) => {
  const [current, setCurrent] = useState("mail");
  const [switchState, setSwitchState] = useState(false);

  const item1 = [
    {
      label: <Link to="/">로고</Link>,
      key: "로고",
    },
    {
      label: <Link to="/allfree">FAQ</Link>,
      key: "allFree",
    },
    {
      label: <Link to="/allfree">야간모드</Link>,
      key: "nightMode",
    },
    {
      label: (
        <Link style={{ marginLeft: "auto" }} className={menu.flex} to="/login">
          로그인
        </Link>
      ),
      key: "login",
    },
  ];

  const item2 = [
    {
      label: <Link to="/">로고</Link>,
      key: "로고",
    },
    {
      label: <Link to="/allfree">FAQ</Link>,
      key: "allfree",
    },
    {
      label: <Link to="/profile">프로필</Link>,
      key: "logout",
    },
  ];

  const body = document.querySelector("body");

  const onClickSwitch = () => {
    if (switchState === false) {
      body.style.backgroundColor = "black";
      body.style.color = "white";
      setSwitchState(true);
    } else {
      body.style.backgroundColor = "white";
      body.style.color = "black";
      setSwitchState(false);
    }
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  if (loginState) {
    return (
      <Menu mode="horizontal" defaultSelectedKeys={["mail"]}>
        <Menu.Item key="mail">
          <Link to="/">로고</Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <Link to="/allfree">FAQ</Link>
        </Menu.Item>
        <Menu.Item key="mail" style={{ marginLeft: "auto", marginRight: "auto" }}>
          야간모드
        </Menu.Item>
        <Menu.Item key="mail" style={{ marginLeft: "auto" }}>
          <Link
            style={{ marginLeft: "auto" }}
            className={menu.flex}
            to="/profile"
          >
            프로필
          </Link>
        </Menu.Item>
      </Menu>
    );
  } else {
    return (
      <Menu mode="horizontal" defaultSelectedKeys={["logo"]}>
        <Menu.Item key="logo">
          <Link to="/">로고</Link>
        </Menu.Item>
        <Menu.Item key="FAQ">
          <Link to="/allfree">FAQ</Link>
        </Menu.Item>
        <Menu.Item key="nightMode" style={{ marginRight: "auto" }}>
          야간모드
        </Menu.Item>
        <Menu.Item key="login" style={{ marginLeft: "auto", marginRight: "0px" }}>
          <Link
            style={{ marginLeft: "auto" }}
            className={menu.flex}
            to="/login"
          >
            로그인
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
};

export default MenuBar;
