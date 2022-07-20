import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.min.css";
import React from "react";

import styles from "../CSS/login.module.css";

function NewAccount({ onSubmitAccount, onChange, onSwitch, onFinishFailed }) {
  return (
    <div className={styles.flex}>
      <Form
        size="middle"
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
        onFinish={onSubmitAccount}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="Email"
          rules={[
            {
              required: true,
              message: "Please input your Email!",
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
          <Input.Password
            name="Password"
            onChange={onChange}
          />
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
            계정 생성
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
          <Button
            name="login"
            type="primary"
            htmlType="button"
            onClick={onSwitch}
          >
            기존 계정으로 로그인 하기
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default NewAccount;
