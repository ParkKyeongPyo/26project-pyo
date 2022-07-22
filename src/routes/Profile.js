import styles from "../CSS/login.module.css";
import { Button, Form, Input, InputNumber } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { authService } from "../fbase";
import { db } from "../fbase";
import { doc, setDoc, getDoc } from "firebase/firestore";

import MenuBar from "../components/MenuBar";
import { PresetColorTypes } from "antd/lib/_util/colors";

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

function Profile({ loginState }) {
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [job, setJob] = useState("");
  const [intro, setIntro] = useState("");
  const navigate = useNavigate();

  const user = authService.currentUser;
  let email = "";

  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  }

  const getUserInfo = async () => {
    const docRef = doc(db, "Profile", email);
    const docSnap = await getDoc(docRef);

    console.log(docSnap);

    if (docSnap.exists()) {
      const preProfile = docSnap.data();
      setNickname(preProfile.nickname);
      setAge(preProfile.age);
      setJob(preProfile.job);
      setIntro(preProfile.intro);
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };

  getUserInfo();

  const onChange = (e) => {
    if (e.target.name === "nickname") {
      setNickname(e.target.value);
    } else if (e.target.name === "age") {
      setAge(e.target.value);
    } else if (e.target.name === "job") {
      setJob(e.target.value);
    } else if (e.target.name === "intro") {
      setIntro(e.target.value);
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
    await setDoc(doc(db, "Profile", email), {
      nickname: nickname,
      age: age,
      job: job,
      intro: intro,
    });
  };

  return (
    <div style={{ height: "inherit" }}>
      <MenuBar loginState={loginState} />
      <div className={styles.flexHome}>
        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
          onFinish={onSave}
        >
          <Form.Item name={["user", "nickname"]} label="닉네임">
            <Input name="nickname" onChange={onChange} placeholder={nickname} />
          </Form.Item>

          <Form.Item name={["user", "age"]} label="나이">
            <Input name="age" onChange={onChange} placeholder={age}/>
          </Form.Item>

          <Form.Item name={["user", "job"]} label="직업">
            <Input name="job" onChange={onChange} placeholder={job} />
          </Form.Item>

          <Form.Item name={["user", "intro"]} label="소개">
            <Input.TextArea name="intro" onChange={onChange} placeholder={intro}/>
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              저장
            </Button>
          </Form.Item>
          <br />
          <br />
          <br />
        </Form>

        <Form onFinish={onSubmit}>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              로그아웃
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Profile;
