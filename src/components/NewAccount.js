import { Button, Form, Input } from "antd";
import "antd/dist/antd.min.css";

import styles from "../CSS/login.module.css";

function NewAccount({ onSubmitAccount, onChange, onSwitch, onFinishFailed }) {
  /*
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
            <span style={{ marginLeft: "10px", verticalAlign: "middle" }}>
              Coninue with google
            </span>
          </Button>
        </Form.Item>
  */

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
          <Input.Password
            placeholder="6자리 이상으로 입력해주세요."
            name="Password"
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item
          label="닉네임"
          name="nickname"
          rules={[
            {
              required: true,
              message: "사용할 닉네임을 적어주세요!",
            },
          ]}
        >
          <Input  onChange={onChange} placeholder="20자 이하로 입력해주세요." />
        </Form.Item>

        <div className={styles.message}>
          *닉네임은 추후 프로필에서 수정할 수 있습니다.
        </div>

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
