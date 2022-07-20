import MenuBar from "../components/MenuBar";

import styles from "../CSS/login.module.css";
import groupStyles from "../CSS/jobGroup.module.css";
import jobStyles from "../CSS/job.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import IT from "../components/IT";

/* 
해결해야 될 문제
1. 여러 개 직군 클릭시 문제 => 하나만 클릭하게 해야 함.
*/

function Jobchosing({ selectedJob, setSelectedJob, loginState }) {
  const [groupClick, setGroupClick] = useState(false);
  const [jobClick, setJobClick] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("");

  const navigate = useNavigate();

  const onGroupMouseOver = (e) => {
    if (!groupClick) e.target.className = groupStyles.mouseOver;
  };

  const onGroupMouseOut = (e) => {
    if (!groupClick) e.target.className = groupStyles.group;
  };

  const onJobMouseOver = (e) => {
    if (!jobClick) e.target.className = groupStyles.mouseOver;
  };

  const onJobMouseOut = (e) => {
    if (!jobClick) e.target.className = groupStyles.group;
  };

  const onGroupClick = (e) => {
    if (groupClick) {
      setGroupClick(false);
      e.target.clasName = groupStyles.group;
      setSelectedGroup("");
      setSelectedJob("");
    } else {
      setGroupClick(true);
      e.target.className = groupStyles.click;
      setSelectedGroup(e.target.innerText);
    }
  };

  const onJobClick = (e) => {
    if (jobClick) {
      setJobClick(false);
      e.target.clasName = groupStyles.group;
      setSelectedJob("");
    } else {
      setJobClick(true);
      e.target.className = groupStyles.click;
      setSelectedJob(e.target.innerText);
    }
  };

  const jobChoseing = () => {
    if (selectedGroup === "IT" && selectedJob === "개발자")
      navigate("/community/dev");
  };

  return (
    <div style={{ height: "inherit" }}>
      <MenuBar loginState={loginState} />
      <div className={styles.flex}>
        <div className={groupStyles.groupTop}>
          <h3 className={groupStyles.groupFlex}>직군</h3>
          <div className={groupStyles.groupFlex}>
            <span
              className={groupStyles.group}
              onMouseOut={onGroupMouseOut}
              onMouseOver={onGroupMouseOver}
              onClick={onGroupClick}
            >
              IT
            </span>
            <span
              className={groupStyles.group}
              onMouseOut={onGroupMouseOut}
              onMouseOver={onGroupMouseOver}
              onClick={onGroupClick}
            >
              교육
            </span>
            <span
              className={groupStyles.group}
              onMouseOut={onGroupMouseOut}
              onMouseOver={onGroupMouseOver}
              onClick={onGroupClick}
            >
              예술
            </span>
            <span
              className={groupStyles.group}
              onMouseOut={onGroupMouseOut}
              onMouseOver={onGroupMouseOver}
              onClick={onGroupClick}
            >
              크리에이터
            </span>
          </div>
          <div className={groupStyles.groupFlex}>
            <span
              className={groupStyles.group}
              onMouseOut={onGroupMouseOut}
              onMouseOver={onGroupMouseOver}
              onClick={onGroupClick}
            >
              비지니스
            </span>
            <span
              className={groupStyles.group}
              onMouseOut={onGroupMouseOut}
              onMouseOver={onGroupMouseOver}
              onClick={onGroupClick}
            >
              마케팅
            </span>
            <span
              className={groupStyles.group}
              onMouseOut={onGroupMouseOut}
              onMouseOver={onGroupMouseOver}
              onClick={onGroupClick}
            >
              Writer
            </span>
          </div>
        </div>
        <div className={jobStyles.groupTop}>
          <h3 className={jobStyles.groupFlex}>직업</h3>
          {selectedGroup === "IT" && (
            <IT
              onJobMouseOver={onJobMouseOver}
              onJobMouseOut={onJobMouseOut}
              onJobClick={onJobClick}
            />
          )}
          <br />
          <br />
          <br />
          {selectedGroup === "IT" && selectedJob === "개발자" && (
            <Button type="primary" onClick={jobChoseing}>
              프리랜서 개발자 커뮤니티 바로가기!
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Jobchosing;
