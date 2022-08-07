import { useState, useEffect } from "react";
import { authService } from "../fbase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

import styles from "../CSS/login.module.css";

import MenuBar from "../components/MenuBar";
import LoginCom from "../components/LoginCom.js";
import NewAccount from "../components/NewAccount.js";

import { Steps } from "antd";
const { Step } = Steps;

const Login = ({ loginState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);

  let stepNum = 0;

  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  //Login Submit Event process
  const onSubmitAccount = async () => {
    //새 계정 만드는 처리
    stepNum = 1;
    await createUserWithEmailAndPassword(authService, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      }); //로그인 처리
  };

  const onSubmitLogin = async () => {
    stepNum = 1;
    await signInWithEmailAndPassword(authService, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  //Username, email, password onChange event
  const onChange = (e) => {
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else if (e.target.name === "Password") {
      setPassword(e.target.value);
    }
  };

  const toggleOAuth = () => {
    console.log("hihi");
  };

  //newAccount page or login page
  const onSwitch = (e) => {
    if (e.target.innerText === "새 계정 만들기") {
      setNewAccount(true);
    } else if (e.target.innerText === "기존 계정으로 로그인 하기") {
      setNewAccount(false);
    }
  };

  return (
    <div className={styles.loginPage}>
      <MenuBar loginState={loginState} />
      <div className={styles.stepDiv}>
        <Steps current={stepNum} className={styles.step}>
          {newAccount ? (
            <>
              <Step title="계정 생성" description="This is a description." />
              <Step title="닉네임 설정" description="This is a description." />
              <Step title="회원가입" description="This is a description." />
            </>
          ) : (
            <>
              <Step title="ID/PW 입력" description="This is a description." />
              <Step title="로그인" description="This is a description." />
            </>
          )}
        </Steps>
      </div>
      {newAccount ? (
        <NewAccount
          onSubmitAccount={onSubmitAccount}
          onChange={onChange}
          onSwitch={onSwitch}
          onFinishFailed={onFinishFailed}
          loginState={loginState}
        />
      ) : (
        <LoginCom
          onSubmitLogin={onSubmitLogin}
          onChange={onChange}
          onSwitch={onSwitch}
          onFinishFailed={onFinishFailed}
          loginState={loginState}
        />
      )}
    </div>
  );
};

export default Login;
