import profile from "../CSS/profile.module.css";
import { Button, Form, Input, message, Popconfirm } from "antd";
import "antd/dist/antd.min.css";
import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { signOut, deleteUser } from "firebase/auth";
import { authService, db } from "../fbase";
import { doc, getDoc, updateDoc } from "firebase/firestore";

import MenuBarHome from "../components/MenuBarHome";
import Footer from "../components/Footer";
import NameValidation from "../components/NameValidation";

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
    else {
      let value = true;
      NameValidation(userNickname, navigate, value);
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
        message.error("오류가 발생했습니다. 다시 시도해주세요.");
      });
  };

  /*const onSave = async () => {
    const docRef = doc(db, "혼자당", "닉네임");
    const docSnap = await getDoc(docRef);
    const nArray = docSnap.data().name;
    let value = true;
    let num = 0;
    const preName = authService.currentUser.displayName;

    nArray.map((item) => {
      if (item === userNickname) value = false;
      num++;
      if (num === nArray.length) {
        if (value) {
          updateProfile(authService.currentUser, {
            displayName: userNickname,
          })
            .then(async () => {
              //배열에 있는 기존 닉네임 제거 후 새로운 닉네임으로 치환
              const index = nArray.indexOf(preName);
              nArray[index] = userNickname;
              //배열 업데이트
              await updateDoc(docRef, {
                name: nArray
              });

              navigate("/");
            })
            .catch((error) => {
              message.error("오류가 발생했습니다. 다시 시도해주세요.");
            });
        } else {
          message.warning("해당 닉네임이 존재합니다.");
        }
      }
    });
  };*/

  const confirm = (e) => {
    const user = authService.currentUser;
    const displayName = user.displayName;
    deleteUser(user)
      .then(async () => {
        const docRef = doc(db, "혼자당", "닉네임");
        const docSnap = await getDoc(docRef);
        const nArray = docSnap.data().name;

        //db 혼자번당/닉네임/name 배열에 있는 유저 닉네임 삭제
        const index = nArray.indexOf(displayName);
        nArray.splice(index, 1);

        //db 혼자번당/닉네임/name 업데이트
        updateDoc(docRef, {
          name: nArray,
        });

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
      style={{ height: "inherit", backgroundColor: "inherit", color: "inherit" }}
    >
      <MemorizedMenuBarHome loginState={loginState} />
      <div className={profile.profile}>
        <div className={profile.profileSub}>
          <Form {...layout} name="nest-messages">
            <Form.Item name={["user", "nickname"]} label="닉네임">
              <Input
                name="nickname"
                onChange={onChange}
                placeholder={displayName}
              />
            </Form.Item>

            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button
                onClick={onSubmitFilter}
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
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 2 }}>
              <Button type="primary" htmlType="submit" onClick={onSubmit}>
                로그아웃
              </Button>
            </Form.Item>
            <br />
            <br />
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
      </div>
      <MemorizedFooter />
    </div>
  );
}

export default Profile;
