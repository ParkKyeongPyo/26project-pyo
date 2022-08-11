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
  console.log(user);

  if (user) {
    displayName = user.displayName;
  }

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
