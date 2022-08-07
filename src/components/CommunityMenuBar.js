import { Menu } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

let item = [];

const CommunityMenuBar = ({ job, selectedGroup }) => {
  const [current, setCurrent] = useState("");

  const item1 = [
    {
      label: <Link to="/">Home</Link>,
      key: "Home",
    },
    {
      label: <Link to="/커뮤니티/프리랜서">All 프리랜서</Link>,
      key: "freelancer",
    },
    {
      label: <Link to="/커뮤니티">{job}</Link>,
      key: "커뮤니티",
    },
  ];

  const item2 = [
    {
      label: <Link to="/">Home</Link>,
      key: "Home",
    },
    {
      label: <Link to="/커뮤니티/크리에이터">All 크리에이터</Link>,
      key: "freelancer",
    },
    {
      label: <Link to="/커뮤니티">{job}</Link>,
      key: "커뮤니티",
    },
  ];

  const item3 = [
    {
      label: <Link to="/">Home</Link>,
      key: "Home",
    },
    {
      label: <Link to="/커뮤니티/프리랜서">All 자영업자</Link>,
      key: "freelancer",
    },
    {
      label: <Link to="/커뮤니티">{job}</Link>,
      key: "커뮤니티",
    },
  ];

  if (selectedGroup === "프리랜서") item = item1;
  else if (selectedGroup === "크리에이터") item = item2;
  else if (selectedGroup === "자영업자") item = item3;

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      theme="dark"
      selectedKeys={[current]}
      mode="horizontal"
      items={item}
    />
  );
};

export default CommunityMenuBar;
