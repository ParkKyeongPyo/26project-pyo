import { Table } from "antd";
import React from "react";
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    width: 150,
  },
  {
    title: "종류",
    dataIndex: "age",
    width: 150,
  },
  {
    title: "제목",
    dataIndex: "address",
  },
];
const data = [];

for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const Board = () => (
  <Table
    columns={columns}
    dataSource={data}
    pagination={{
      pageSize: 50,
    }}
    boardered="true"
    size="small"
  />
);

export default Board;
