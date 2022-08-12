import { Select } from "antd";
const { Option } = Select;

function WriteCate({ selectedGroup, setCategory }) {
  const handleChange = (value) => {
    setCategory(value);
  };

  if (selectedGroup === "프리랜서") {
    return (
      <Select
        defaultValue="전체"
        style={{
          width: 150,
        }}
        onChange={handleChange}
      >
        <Option value="전체">전체</Option>
        <Option value="Q&A">Q&A</Option>
        <Option value="정보공유">정보공유</Option>
        <Option value="경험공유">경험공유</Option>
        <Option value="현실고충">현실고충</Option>
        <Option value="수익">수익</Option>
        <Option value="세금&계약">세금&계약</Option>
        <Option value="스터디&동아리">스터디&동아리</Option>
      </Select>
    );
  } else if (selectedGroup === "크리에이터") {
    return (
      <Select
        defaultValue="전체"
        style={{
          width: 150,
        }}
        onChange={handleChange}
      >
        <Option value="전체">전체</Option>
        <Option value="Q&A">Q&A</Option>
        <Option value="정보공유">정보공유</Option>
        <Option value="경험공유">경험공유</Option>
        <Option value="현실고충">현실고충</Option>
        <Option value="수익">수익</Option>
        <Option value="세금&계약">세금&계약</Option>
        <Option value="운영">운영</Option>
        <Option value="협업">협업</Option>
      </Select>
    );
  } else if (selectedGroup === "자영업자") {
    return (
      <Select
        defaultValue="전체"
        style={{
          width: 150,
        }}
        onChange={handleChange}
      >
        <Option value="전체">전체</Option>
        <Option value="Q&A">Q&A</Option>
        <Option value="정보공유">정보공유</Option>
        <Option value="경험공유">경험공유</Option>
        <Option value="현실고충">현실고충</Option>
        <Option value="수익">수익</Option>
        <Option value="세금&계약">세금&계약</Option>
        <Option value="운영">운영</Option>
        <Option value="직원&알바">직원&알바</Option>
      </Select>
    );
  }
}

export default WriteCate;
