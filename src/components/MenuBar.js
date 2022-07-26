import { Menu } from "antd";
import 'antd/dist/antd.min.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const MenuBar = ({loginState}) => {
  const [current, setCurrent] = useState("mail");

  const item1 = [
    {
      label: <Link to="/">로고</Link>,
      key: "로고",
    },
    {
      label: <Link to="/allfree">All 프리랜서</Link>,
      key: "allFree",
    },
    {
      label:  <Link to="/login">로그인</Link>,
      key: "login",
    },
  ];
  
  const item2 = [
    {
      label: <Link to="/">로고</Link>,
      key: "로고",
    },
    {
      label: <Link to="/allfree">All 프리랜서</Link>,
      key: "allfree",
    },
    {
      label: <Link to="/profile">프로필</Link>,
      key: "logout",
    },
  ];

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={loginState ? item2 : item1}
    />
  );
};

export default MenuBar;