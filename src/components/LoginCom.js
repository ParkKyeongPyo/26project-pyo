import { Button, Checkbox, Form, Input } from "antd";
import "antd/dist/antd.min.css";
import React from "react";

import styles from "../CSS/login.module.css";

function LoginCom({ onSubmitLogin, onChange, onSwitch, onFinishFailed, onSubmitGoogle}) {
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
              message: "비밀번호를 입력해주세요!",
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
              message: "사용할 닉네임을 적어주세요!",
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
          <Button htmlType="button" onClick={onSubmitGoogle}>
            <img
              width="17px"
              alt="Google sign-in"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
            />
            <span style={{marginLeft: "10px", verticalAlign: "middle"}}>Coninue with google</span>
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
