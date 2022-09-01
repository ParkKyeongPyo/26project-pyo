import {
  Button,
  Checkbox,
  Form,
  Input,
  Popover,
  Popconfirm,
  message,
} from "antd";
import { sendPasswordResetEmail } from "firebase/auth";
import { authService } from "../fbase";
import "antd/dist/antd.min.css";
import React from "react";

import styles from "../CSS/login.module.css";

function LoginCom({
  onSubmitLogin,
  onChange,
  onSwitch,
  onFinishFailed,
  setLocalLoginState,
  email,
}) {
  const checked = (e) => {
    if (e.target.checked) setLocalLoginState(true);
    else setLocalLoginState(false);
  };

  const confirm = async () => {
    if (email === "") {
      message.warning(
        "로그인 이메일란에 본인의 이메일을 입력후 다시 시도해주세요."
      );
    } else {
      await sendPasswordResetEmail(authService, email)
        .then(() => {
          message.success("비밀번호 변경 이메일이 전송되었습니다. ⚠️이메일이 도착하지 않았다면 스펨메일함을 확인해주세요.");
        })
        .catch((error) => {
          message.error("에러가 발생했습니다. 다시 시도해주세요.");
        });
    }
  };

  return (
    <div className={styles.flex}>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmitLogin}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="이메일"
          name="Email"
          rules={[
            {
              required: true,
              message: "이메일을 입력해주세요!",
            },
          ]}
        >
          <Input name="Email" onChange={onChange} />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="Password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요!",
            },
          ]}
        >
          <Input.Password name="Password" onChange={onChange} />
        </Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox
            onChange={checked}
            style={{ backgroundColor: "inherit", color: "inherit" }}
          >
            <Popover
              content="체크시 브라우저를 닫아도 로그인이 유지됩니다. 로그아웃시 해제됩니다."
              title="자동 로그인"
              trigger="hover"
            >
              자동 로그인
            </Popover>
          </Checkbox>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            로그인
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Popconfirm
            title={`${email}로 비밀번호 변경 이메일이 전송됩니다. ⚠️로그인 이메일란에 본인의 이메일을 먼저 입력해주세요.`}
            onConfirm={confirm}
            okText="보내기"
            cancelText="취소"
          >
            <Button type="primary" htmlType="button">
              비밀번호 찾기
            </Button>
          </Popconfirm>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="button" onClick={onSwitch}>
            새 계정 만들기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginCom;
