import { Menu } from "antd";
import 'antd/dist/antd.min.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";


const CommunityMenuBar = ({job}) => {
  const [current, setCurrent] = useState("");

  const item = [
    {
      label: <Link to="/">Home</Link>,
      key: "Home",
    },
    {
      label: <Link to="/community/free">All 프리랜서</Link>,
      key: "freelancer",
    },
    {
      label:  <Link to="/community/dev">{job}</Link>,
      key: {job},
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
      items={item}
    />
  );
};

export default CommunityMenuBar;
