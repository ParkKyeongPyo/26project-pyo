import React, { useState } from "react";
import { authService } from "../fbase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { useNavigate } from "react-router-dom";

import styles from "../CSS/login.module.css";

import MenuBar from "../components/MenuBar";
import LoginCom from "../components/LoginCom.js";
import NewAccount from "../components/NewAccount.js";
import Footer from "../components/Footer.js";

import { message } from "antd";

const MemorizedMenuBar = React.memo(MenuBar);
const MemorizedFooter = React.memo(Footer);
const MemorizedLoginCom = React.memo(LoginCom);
const MemorizedNewAccount = React.memo(NewAccount);

const Login = ({ loginState }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(false);
  const [localLoginState, setLocalLoginState] = useState(true);

  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onSubmitGoogle = async () => {
    if (!localLoginState) {
      setPersistence(authService, browserSessionPersistence)
        .then(() => {
          const provider = new GoogleAuthProvider();
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return signInWithRedirect(authService, provider).then(navigate("/"));
        })
        .catch((error) => {
          // Handle Errors here.
          message.error("오류가 발생했습니다. 다시 로그인해주세요.")
        });
    } else {
      setPersistence(authService, browserLocalPersistence)
        .then(() => {
          const provider = new GoogleAuthProvider();
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return signInWithRedirect(authService, provider).then(navigate("/"));
        })
        .catch((error) => {
          // Handle Errors here.
          message.error("오류가 발생했습니다. 다시 로그인해주세요.")
        });
    }
  };

  //Login Submit Event process
  const onSubmitAccount = async (e) => {
    //새 계정 만드는 처리
    await createUserWithEmailAndPassword(authService, email, password)
      .then((userCredential) => {
        // Signed in
        updateProfile(authService.currentUser, {
          displayName: e.nickname,
        })
          .then(() => {
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
          message.error(
            "이메일 형식이 아닙니다. 입력하신 내용을 다시 확인해주세요."
          );
        } else if (errorCode === "auth/weak-password") {
          message.error("비밀번호는 6자리 이상이여야 합니다.");
        }
        // ..
      }); //로그인 처리
  };

  const onSubmitLogin = async () => {
    if (!localLoginState) {
      setPersistence(authService, browserSessionPersistence)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return signInWithEmailAndPassword(authService, email, password).then(
            navigate("/")
          );
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          if (errorCode === "auth/invalid-email") {
            message.error(
              "이메일 형식이 아닙니다. 입력하신 내용을 다시 확인해주세요."
            );
            navigate("/login");
          } else if (errorCode === "auth/wrong-password") {
            message.error(
              "비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
            );
            navigate("/login");
          } else if (errorCode === "auth/user-not-found") {
            message.error(
              "이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
            );
            navigate("/login");
          }
        });
    } else {
      setPersistence(authService, browserLocalPersistence)
        .then(() => {
          // Existing and future Auth states are now persisted in the current
          // session only. Closing the window would clear any existing state even
          // if a user forgets to sign out.
          // ...
          // New sign-in will be persisted with session persistence.
          return signInWithEmailAndPassword(authService, email, password).then(
            navigate("/")
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/invalid-email") {
            message.error(
              "이메일 형식이 아닙니다. 입력하신 내용을 다시 확인해주세요."
            );
            navigate("/login");
          } else if (errorCode === "auth/wrong-password") {
            message.error(
              "비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
            );
            navigate("/login");
          } else if (errorCode === "auth/user-not-found") {
            message.error(
              "이메일 또는 비밀번호를 잘못 입력했습니다. 입력하신 내용을 다시 확인해주세요."
            );
            navigate("/login");
          }
        });
    }
  };

  //Username, email, password onChange event
  const onChange = (e) => {
    if (e.target.name === "Email") {
      setEmail(e.target.value);
    } else if (e.target.name === "Password") {
      setPassword(e.target.value);
    }
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
    <>
      <MemorizedMenuBar loginState={loginState} />
      <div className={styles.loginPage}>
        {newAccount ? (
          <MemorizedNewAccount
            onSubmitAccount={onSubmitAccount}
            onChange={onChange}
            onSwitch={onSwitch}
            onFinishFailed={onFinishFailed}
            loginState={loginState}
            onSubmitGoogle={onSubmitGoogle}
          />
        ) : (
          <MemorizedLoginCom
            onSubmitLogin={onSubmitLogin}
            onChange={onChange}
            onSwitch={onSwitch}
            onFinishFailed={onFinishFailed}
            loginState={loginState}
            onSubmitGoogle={onSubmitGoogle}
            setLocalLoginState={setLocalLoginState}
          />
        )}
      </div>
      <MemorizedFooter />
    </>
  );
};

export default Login;
