import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.min.css";
import React from "react";

import styles from "../CSS/login.module.css";

function LoginCom({ onSubmitLogin, onChange, onSwitch, onFinishFailed}) {
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
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input Email!",
            },
          ]}
        >
          <Input name="Email" onChange={onChange} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="Password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
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
          <Checkbox>Remember me</Checkbox>
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
          <Button htmlType="button">Continue with google</Button>
          <Button htmlType="button">Continue with github</Button>
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
