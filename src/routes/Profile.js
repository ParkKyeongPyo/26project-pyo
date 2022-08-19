import styles from "../CSS/login.module.css";
import { Button, Form, Input, message, Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { signOut, updateProfile, deleteUser } from "firebase/auth";
import { authService } from "../fbase";

import MenuBarHome from "../components/MenuBarHome";
import Footer from "../components/Footer";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

let displayName = "";

const MemorizedMenuBarHome = React.memo(MenuBarHome);
const MemorizedFooter = React.memo(Footer);

function Profile({ loginState }) {
  const [userNickname, setUserNickname] = useState("");

  const navigate = useNavigate();

  const onChange = (e) => {
    if (e.target.name === "nickname") {
      setUserNickname(e.target.value);
    }
  };

  const onSubmitFilter = () => {
    if (
      userNickname.includes("운영자") &&
      authService.currentUser.email !== "as8798as@gmail.com"
    )
      message.error("운영자가 들어간 닉네임은 사용할 수 없습니다.");
    else onSave();
  };

  const onSubmit = () => {
    signOut(authService)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        message.error("오류가 발생했습니다. 다시 시도해주세요.");
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
        message.error("오류가 발생했습니다. 다시 시도해주세요.");
      });
  };

  const onDeleteClick = async () => {
    const user = authService.currentUser;
    deleteUser(user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error ocurred
        // ...
        message.error("오류가 발생했습니다. 다시 시도해주세요.");
      });
  };

  const confirm = (e) => {
    const user = authService.currentUser;
    deleteUser(user)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error ocurred
        // ...
        message.error("오류가 발생했습니다. 다시 시도해주세요.");
      });
  };

  //로그아웃시 페이지가 한번 렌더링 됨.
  //따라서 아래 if문 로직으로 처리하지 않으면 user.displayname을 찾을 수 없는 에러가 생긴다.
  const user = authService.currentUser;

  if (user) {
    displayName = user.displayName;
  }

  return (
    <div
      style={{ height: "inherit", backgroundColor: "white", color: "black" }}
    >
      <MemorizedMenuBarHome loginState={loginState} />
      <div className={styles.flexHome}>
        <Form {...layout} name="nest-messages" onFinish={onSubmitFilter}>
          <Form.Item name={["user", "nickname"]} label="닉네임">
            <Input
              name="nickname"
              onChange={onChange}
              placeholder={displayName}
            />
          </Form.Item>

          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginTop: "10px" }}
            >
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
          <br/>
          <br/>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
            <Popconfirm
              title="정말 탈퇴하시겠습니까?"
              onConfirm={confirm}
              okText="Yes"
              cancelText="No"
            >
              <Button type="primary" htmlType="button">
                회원 탈퇴
              </Button>
            </Popconfirm>
          </Form.Item>
        </Form>
      </div>
      <MemorizedFooter />
    </div>
  );
}

export default Profile;
