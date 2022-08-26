import { authService, db } from "../fbase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updateProfile } from "firebase/auth";

import { message } from "antd";

const NameValidation = async (userNickname, navigate, value) => {
  const docRef = doc(db, "혼자당", "닉네임");
  const docSnap = await getDoc(docRef);
  const nArray = docSnap.data().name;
  let num = 0;
  let preName = "";

  if (authService.currentUser !== null) {
    preName = authService.currentUser.displayName;
  }

  if (userNickname.length <= 20 && !userNickname.includes("운영자")) {
    if (preName !== "") {
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
                  name: nArray,
                });

                navigate("/");
              })
              .catch((error) => {
                message.error("오류가 발생했습니다. 다시 시도해주세요.");
              });
          } else {
            message.warning("해당 닉네임이 이미 존재합니다.");
          }
        }
      });
    } else {
      //preName이 없는 경우 (새로운 계정 만들 때)
      nArray.map((item) => {
        if (item === userNickname) value = false;
        num++;
        if (num === nArray.length) {
          if (value) {
            nArray.push(userNickname);
            //배열 업데이트
            updateDoc(docRef, {
              name: nArray,
            });
          } else {
            message.warning("해당 닉네임이 이미 존재합니다.");
          }
        }
      });
    }
  } else {
    if(userNickname.includes("운영자")){
      message.warning("운영자가 들어간 닉네임은 지을 수 없습니다.");
      value = false;
    } else {
      message.warning("닉네임은 20자 이하로 작성해야합니다.");
      value = false;
    }
  }

  //preName이 있는 경우 (프로필에서 이름 바꿀 때)

  return value;
};

export default NameValidation;
