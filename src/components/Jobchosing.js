import MenuBar from "./MenuBar";

import styles from "../CSS/login.module.css";
import groupStyles from "../CSS/jobGroup.module.css";
import jobStyles from "../CSS/job.module.css";
import { Button } from "antd";
import "antd/dist/antd.min.css";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    e.target.className = groupStyles.mouseOver;
  };

  const onGroupMouseOut = (e) => {
    e.target.className = groupStyles.group;
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
            <h2 className={groupStyles.groupFlex}>IT</h2>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                개발자
              </Link>
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
                웹/앱 운영자
              </span>
              <span
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
                onClick={onGroupClick}
              >
                쇼핑몰 운영자
              </span>
            </div>
          </div>
          <div className={groupStyles.groupTop}>
            <h2 className={groupStyles.groupFlex}>디자인/창작</h2>
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
                작곡가
              </span>
            </div>
          </div>
        </div>

        <div className={groupStyles.groupFlex}>
          <div className={groupStyles.groupTop}>
            <h2 className={groupStyles.groupFlex}>문서/글쓰기</h2>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                작가
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                소설가
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                번역가
              </Link>
            </div>
            <div className={groupStyles.groupFlex}>
            <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                통역가
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                카피라이터
              </Link>
            </div>
          </div>
          <div className={groupStyles.groupTop}>
            <h2 className={groupStyles.groupFlex}>크리에이터</h2>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                유튜버
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                인스타 인플루언서
              </Link>
            </div>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                블로거
              </Link>
            </div>
          </div>
        </div>

        <div className={groupStyles.groupFlex}>
          <div className={groupStyles.groupTop}>
            <h2 className={groupStyles.groupFlex}>교육</h2>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                강사
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                심리상담가
              </Link>
            </div>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                온라인 강사
              </Link>
            </div>
          </div>
          <div className={groupStyles.groupTop}>
            <h2 className={groupStyles.groupFlex}>영상/사진/음향</h2>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                영상편집가
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                사진가
              </Link>
            </div>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                성우
              </Link>
            </div>
          </div>
        </div>

        <div className={groupStyles.groupFlex}>
          <div className={groupStyles.groupTop}>
            <h2 className={groupStyles.groupFlex}>비지니스</h2>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                마케터
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                컨설턴트
              </Link>
            </div>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                온라인 강사
              </Link>
            </div>
          </div>
          <div className={groupStyles.groupTop}>
            <h2 className={groupStyles.groupFlex}>방송계</h2>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                모델
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                메이크업 아티스트
              </Link>
            </div>
            <div className={groupStyles.groupFlex}>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                헤어 디자이너
              </Link>
              <Link
                to="/community/dev"
                className={groupStyles.group}
                onMouseOut={onGroupMouseOut}
                onMouseOver={onGroupMouseOver}
              >
                헬스 트레이너
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobchosing;
