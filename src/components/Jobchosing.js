import MenuBar from "./MenuBar";

import styles from "../CSS/login.module.css";
import groupStyles from "../CSS/jobGroup.module.css";
import jobStyles from "../CSS/job.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import IT from "./IT";

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

  return (
    <div style={{ height: "inherit" }}>
      <div className={styles.flexHome}>
        <div className={groupStyles.groupFlex}>
          <div className={groupStyles.groupTop}>
            <h3 className={groupStyles.groupFlex}>IT/프로그래밍</h3>
            <div className={groupStyles.groupFlex}>
              <Link
                
                to="/community/alldev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                All 개발자
              </Link>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                웹 개발자
              </span>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                앱 개발자
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
          <div className={groupStyles.groupTop}>
            <h3 className={groupStyles.groupFlex}>디자인/창작</h3>
            <div className={groupStyles.groupFlex}>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                그래픽 디자이너
              </span>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                일러스트레이터
              </span>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                애니메이터
              </span>
            </div>
            <div className={groupStyles.groupFlex}>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                웹툰 작가
              </span>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                소설가
              </span>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                작곡가
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobchosing;
