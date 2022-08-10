import styles from "../CSS/login.module.css";
import { Button, Form, Input, InputNumber, Popover } from "antd";
import "antd/dist/antd.min.css";
import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { signOut, updateProfile } from "firebase/auth";
import { authService } from "../fbase";
import { db } from "../fbase";
import { doc, setDoc, getDoc } from "firebase/firestore";

import MenuBar from "../components/MenuBar";
import Footer from "../components/Footer";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

let displayName = "";

function Profile({ loginState }) {
  const [userNickname, setUserNickname] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === "nickname") {
      setUserNickname(e.target.value);
    }
  };

  const onSubmit = () => {
    signOut(authService)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };

  const onSave = async () => {
    updateProfile(authService.currentUser, {
      displayName: userNickname,
    })
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  //로그아웃시 페이지가 한번 렌더링 됨.
  //따라서 아래 if문 로직으로 처리하지 않으면 user.displayname을 찾을 수 없는 에러가 생긴다.
  const user = authService.currentUser;

  if (user) {
    displayName = user.displayName;
  }

  const content = (
    <div>
      현재 커뮤니티에 있는 내 글보기 기능은 현재 닉네임을 기반으로 추출됩니다.{" "}
      <br />
      따라서 같은 직업 커뮤니티 안에 같은 닉네임을 사용하는 유저가 있을 시 해당
      유저의 글까지 포함될 수 있습니다. <br />
      최대한 겹치지 않을 것 같은 이름으로 짓는 것을 추천드립니다:)
    </div>
  );

  return (
    <div
      style={{ height: "inherit", backgroundColor: "white", color: "black" }}
    >
      <MenuBar loginState={loginState} />
      <div className={styles.flexHome}>
        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
          onFinish={onSave}
        >
          <Form.Item name={["user", "nickname"]} label="닉네임">
            <Input
              name="nickname"
              onChange={onChange}
              placeholder={displayName}
            />
          </Form.Item>


          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="default" htmlType="button">
              <Popover content={content} title="Tips!" trigger="hover">
                닉네임 팁!
              </Popover>
            </Button>
            <Button type="primary" htmlType="submit" style={{marginTop: "10px"}}>
              저장
            </Button>
          </Form.Item>
          <br />
          <br />
          <br />
        </Form>

        <Form onFinish={onSubmit}>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
            <Button type="primary" htmlType="submit">
              로그아웃
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
