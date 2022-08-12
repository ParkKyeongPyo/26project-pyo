import Footer from "./Footer.js";
import { useSpring, animated } from "react-spring";
import { db } from "../fbase.js";
import {
  LikeOutlined,
  HeartOutlined,
  EyeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";
import { authService } from "../fbase.js";

import writing from "../CSS/writing.module.css";

import { Button, Comment, Form, Input, List, message } from "antd";
import moment from "moment";
import React, { useState, useEffect } from "react";
const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length}개 ${comments.length > 1 ? "답변들" : "답변"}`}
    itemLayout="horizontal"
    renderItem={(props) => <Comment {...props} />}
  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        등록
      </Button>
    </Form.Item>
  </>
);

let data = {};
let aryCount = 0;
let username = "";
let email = "";
let synOnlyOne = 0;
let symNum = 2;

function Writing({ writingInfo, jobEng, userRN, loginState }) {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [dataChanged, setDataChanged] = useState(false);
  const [synCount, setSynCount] = useState(writingInfo.공감);

  const animation1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  /*
  sunmit function : 
  글의 댓글수 가져와서 n-1개(인기글 기준 댓글수 n개)면 favNum 부여하는(인기글 pagination만들기 위해) handleSubmitReplyCount함수 실행하고
  n-1이 아니라면 댓글만 db에 추가하는 handleSubmit함수 실행
  */
  const submit = async () => {
    const docSnapReplyCount = await getDoc(
      doc(db, jobEng, `${writingInfo.글번호}`)
    );

    aryCount = docSnapReplyCount.data().replyCount;

    if (aryCount === 4) handleSubmitReplyCount(aryCount);
    else handleSubmit(aryCount);
  };

  const handleSubmit = async (aryCount) => {
    const date = new Date();
    const dateTime = `${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}  ${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;

    const docSnapReplyCount = await getDoc(
      doc(db, jobEng, `${writingInfo.글번호}`)
    );

    aryCount += 1;

    let writerName = "";

    if (loginState) {
      writerName = authService.currentUser.displayName;
    } else {
      writerName = userRN;
    }

    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: `${writerName}님`,
          content: value,
          datetime: dateTime,
          actions: [
            <span accessKey={writerName} onClick={onClick}>
              태그
            </span>,
          ],
        },
      ]);
    }, 1000);

    const updateRef = doc(db, jobEng, `${writingInfo.글번호}`);

    await updateDoc(updateRef, {
      replyCount: aryCount,
      reply: arrayUnion({
        author: writerName,
        content: value,
        datetime: dateTime,
        actions: [],
      }),
    });
  };

  const handleSubmitReplyCount = async (aryCount) => {
    const date = new Date();
    const dateTime = `${("0" + (date.getMonth() + 1)).slice(-2)}-${(
      "0" + date.getDate()
    ).slice(-2)}  ${("0" + date.getHours()).slice(-2)}:${(
      "0" + date.getMinutes()
    ).slice(-2)}:${("0" + date.getSeconds()).slice(-2)}`;

    aryCount += 1;

    let writerName = "";

    if (loginState) {
      writerName = authService.currentUser.displayName;
    } else {
      writerName = userRN;
    }

    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: writerName,
          content: value,
          datetime: dateTime,
          actions: [
            <span accessKey={writerName} onClick={onClick}>
              태그
            </span>,
          ],
        },
      ]);
    }, 1000);

    const updateRef = doc(db, jobEng, `${writingInfo.글번호}`);
    const updateFav = doc(db, "CateNum", jobEng + "Fav");

    const docSnap = await getDoc(doc(db, "CateNum", jobEng + "Fav"));

    await updateDoc(updateRef, {
      replyCount: aryCount,
      favNum: docSnap.data().num,
      reply: arrayUnion({
        author: writerName,
        content: value,
        datetime: dateTime,
        actions: [],
      }),
    });

    await updateDoc(updateFav, {
      num: docSnap.data().num + 1,
    });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const onClick = (e) => {
    setValue(`@${e.target.accessKey}님`);
  };

  //첫 랜더링 후 DB에서 글 정보 불러오는 함수
  const asyncFn = async () => {
    const q = query(
      collection(db, jobEng),
      where("num", "==", writingInfo.글번호)
    );
    const querySnapshot = await getDocs(q);
    const dataLength = querySnapshot.docs.length;
    let itemsProcessed = 0;

    querySnapshot.forEach((doc) => {
      data = {
        content: doc.data().content,
        year: doc.data().year,
        time: doc.data().time,
        date: doc.data().date,
        replyCount: doc.data().replyCount,
        reply: doc.data().reply,
        symCount: doc.data().symCount,
        symArray: doc.data().symArray,
      };
      itemsProcessed++;
      let i = 0;
      if (itemsProcessed === dataLength) {
        for (i = 0; i < data.reply.length; i++) {
          data.reply[i].actions.push(
            <span accessKey={data.reply[i].author} onClick={onClick}>
              태그
            </span>
          );
          if (i === data.reply.length - 1) setComments(data.reply);
        }
        aryCount = data.replyCount;
      }
    });

    setDataChanged(true);
  };

  const onSymClick = async () => {
    //공감 email 배열에 공감 버튼을 클릭한 사용자의 이메일이 있는지 확인 state.
    let state = true;

    //사용자가 글 페이지에 들어와서 딱 한번만 공감버튼을 클릭할 수 있도록 만드는 변수
    synOnlyOne += 1;

    //공감 로직은 로그인 사용자의 email로 판별한다.
    email = authService.currentUser.email;

    //DB 공감 배열에 공감버튼 누른 사용자 있는지 확인.
    data.symArray.map((item) => {
      if (item.email === email) state = false;
    });

    //DB 곰감배열에 공감버튼 누른 사용자가 없고 처음 눌렀다면 공감 카운트 + 1.
    if (state && synOnlyOne === 1) {
      const updateRef = doc(db, jobEng, `${writingInfo.글번호}`);

      await updateDoc(updateRef, {
        symCount: data.symCount + 1,
        symArray: arrayUnion({
          email: email,
        }),
      });

      //공감수 n-1개라면 symNum + 1
      if (data.symCount === symNum) {
        const docSnap = await getDoc(doc(db, "CateNum", jobEng + "Sym"));
        const updateCateRef = doc(db, "CateNum", `${jobEng}Sym`);
        const updateRef = doc(db, jobEng, `${writingInfo.글번호}`);

        await updateDoc(updateCateRef, {
          num: docSnap.data().num + 1,
        });

        await updateDoc(updateRef, {
          symNum: docSnap.data().num + 1,
        });
      }

      data.symCount += 1;
      setSynCount(data.symCount);
    } else {
      message.info("글 하나당 최대 한번 공감할 수 있습니다.");
    }
  };

  //공감 버튼은 로그인한 사용자만 사용 가능하도록 하는 함수.
  const onSymCondition = () => {
    if (loginState) onSymClick();
    else message.info("로그인 후 사용할 수 있습니다.");
  };

  useEffect(() => {
    asyncFn();
    synOnlyOne = 0;
  }, []);

  return (
    <>
      <animated.div className={writing.flex} style={animation1}>
        <div>
          <div>
            <div className={writing.heading}>
              {writingInfo.제목.props.children[0].key}
            </div>
          </div>
          <div className={writing.detail}>
            <span>[{writingInfo.카테고리}]</span>
            <span className={writing.writer}>{writingInfo.글쓴이}</span>

            <span className={writing.item}>
              <EyeOutlined /> {writingInfo.조회 + 1}
            </span>
            <span className={writing.item2}>
              <MessageOutlined /> {comments.length}
            </span>
            <span>
              <HeartOutlined /> {synCount}
            </span>
          </div>
          <div className={writing.detail2}>
            <span className={writing.date}>
              {data.year}-{data.date}{" "}
            </span>
            <span>{data.time}</span>
          </div>
        </div>
        <div className={writing.content}>
          <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </div>
        <div className={writing.btns}>
          <Button
            className={writing.symBtn}
            htmlType="button"
            onClick={onSymCondition}
          >
            <FavoriteIcon fontSize="small" />
            <span className={writing.symWord}>공감</span>
          </Button>
          <Button className={writing.symCount} htmlType="button">
            <span>{data.symCount}명</span>
          </Button>
        </div>
        <div>
          {comments.length > 0 && <CommentList comments={comments} />}
          <Comment
            content={
              <Editor
                onChange={handleChange}
                onSubmit={submit}
                submitting={submitting}
                value={value}
              />
            }
          />
        </div>
      </animated.div>
      <Footer />
    </>
  );
}

export default Writing;
