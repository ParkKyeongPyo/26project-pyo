import { Menu } from "antd";
import 'antd/dist/antd.min.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const MenuBar = ({loginState}) => {
  const [current, setCurrent] = useState("mail");

  const item1 = [
    {
      label: <Link to="/">Home</Link>,
      key: "Home",
    },
    {
      label: <Link to="/Jobchosing">직업 선택</Link>,
      key: "Jobchosing",
    },
    {
      label:  <Link to="/login">로그인</Link>,
      key: "login",
    },
  ];
  
  const item2 = [
    {
      label: <Link to="/">Home</Link>,
      key: "Home",
    },
    {
      label: <Link to="/Jobchosing">직업 선택</Link>,
      key: "Jobchosing",
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