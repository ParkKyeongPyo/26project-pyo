import { Menu } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const SmallBar = ({ onClick }) => {
  const [current, setCurrent] = useState("");

  const item = [
    {
      label: "커뮤니티",
      key: "community",
    },
    {
      label: "스터디",
      key: "study",
    },
    {
      label: "동아리",
      key: "club",
    },
    {
      label: "정보",
      key: "info",
    },
  ];

  return (
    <Menu
      onClick={onClick}
      selectedKeys={[current]}
      mode="horizontal"
      items={item}
    />
  );
};

export default SmallBar;
