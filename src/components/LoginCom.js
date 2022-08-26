import { Button, Checkbox, Form, Input, Popover } from "antd";
import "antd/dist/antd.min.css";
import React from "react";

import styles from "../CSS/login.module.css";

function LoginCom({
  onSubmitLogin,
  onChange,
  onSwitch,
  onFinishFailed,
  setLocalLoginState
}) {

  const checked = (e) => {
    if(e.target.checked) setLocalLoginState(true)
    else setLocalLoginState(false)
  }

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
          <Checkbox onChange={checked}>
            <Popover content="체크시 브라우저를 닫아도 로그인이 유지됩니다. 로그아웃시 해제됩니다." title="자동 로그인" trigger="hover">
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
          <Button type="primary" htmlType="button" onClick={onSwitch}>
            새 계정 만들기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginCom;
