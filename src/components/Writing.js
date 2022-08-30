import Footer from "./Footer.js";
import { db } from "../fbase.js";
import { HeartOutlined, EyeOutlined, MessageOutlined } from "@ant-design/icons";
import FavoriteIcon from "@mui/icons-material/Favorite";
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

const Editor = ({ onChange, onSubmit, submitting, value, setH, setC }) => (
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
let email = "";
let synOnlyOne = 0;
let symNum = 4;

const MemorizedFooter = React.memo(Footer);

function Writing({
  writingInfo,
  jobEng,
  userRN,
  loginState,
  setH,
  setC,
  job,
  selectedGroup,
}) {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [dataChanged, setDataChanged] = useState(false);
  const [synCount, setSynCount] = useState(0);

  const docRef = doc(db, "혼자번당모든글", jobEng);
  const colRef = collection(docRef, "Writing");
  const docRefs = doc(docRef, "Writing", `${writingInfo.글번호}`);

  /*
  sunmit function : 
  글의 댓글수 가져와서 n-1개(인기글 기준 댓글수 n개)면 favNum 부여하는(인기글 pagination만들기 위해) handleSubmitReplyCount함수 실행하고
  n-1이 아니라면 댓글만 db에 추가하는 handleSubmit함수 실행
  */
  const submit = async () => {
    const docSnapReplyCount = await getDoc(docRefs);

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
          author: `${writerName}`,
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

    await updateDoc(docRefs, {
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

    const updateFav = doc(db, "혼자번당", `${jobEng}Cate`);

    const docSnap = await getDoc(updateFav);

    await updateDoc(docRefs, {
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
      [`${jobEng}Fav`]: docSnap.data()[`${jobEng}Fav`] + 1,
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
    const q = query(colRef, where("num", "==", writingInfo.글번호));
    const querySnapshot = await getDocs(q);
    const dataLength = querySnapshot.docs.length;
    let itemsProcessed = 0;

    querySnapshot.forEach((doc) => {
      data = {
        header: doc.data().header,
        user: doc.data().user,
        category: doc.data().category,
        content: doc.data().content,
        year: doc.data().year,
        time: doc.data().time,
        date: doc.data().date,
        replyCount: doc.data().replyCount,
        reply: doc.data().reply,
        symCount: doc.data().symCount,
        symArray: doc.data().symArray,
        count: doc.data().count,
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
        setDataChanged(true);
        setSynCount(data.symCount);
        //meta data
        if (job === "") {
          setH(`${data.header}-${selectedGroup} 커뮤니티`);
          setC(`${data.category}, ${data.content}`);
        } else {
          setH(`${data.header}-${job} 커뮤니티`);
          setC(`${data.category}, ${data.content}`);
        }
      }
    });
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
      await updateDoc(docRefs, {
        symCount: data.symCount + 1,
        symArray: arrayUnion({
          email: email,
        }),
      });

      //공감수 n-1개라면 symNum + 1
      if (data.symCount === symNum) {
        const updateCateRef = doc(db, `혼자번당`, `${jobEng}Cate`);
        const docSnap = await getDoc(updateCateRef);

        await updateDoc(updateCateRef, {
          [`${jobEng}Sym`]: docSnap.data()[`${jobEng}Sym`] + 1,
        });

        await updateDoc(docRefs, {
          symNum: docSnap.data()[`${jobEng}Sym`] + 1,
        });
      }

      data.symCount += 1;
      setSynCount(data.symCount);
    } else {
      message.warning("글 하나당 최대 한번 공감할 수 있습니다.");
    }
  };

  //공감 버튼은 로그인한 사용자만 사용 가능하도록 하는 함수.
  const onSymCondition = () => {
    if (loginState) onSymClick();
    else message.warning("로그인 후 사용할 수 있습니다.");
  };

  useEffect(() => {
    asyncFn();
    synOnlyOne = 0;
  }, []);

  return (
    <>
      <div className={writing.flex}>
        <div>
          <div className={writing.adLeft}>
            <div>
              <div className={writing.heading}>{data.header}</div>
            </div>
            <div className={writing.detail}>
              <span>[{data.category}]</span>
              <span className={writing.writer}>{data.user}</span>

              <span className={writing.item1}>
                <EyeOutlined /> {data.count}
              </span>
              <span className={writing.item2}>
                <MessageOutlined /> {comments.length}
              </span>
              <span className={writing.item3}>
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
        </div>
        <div className={writing.ad}></div>
      </div>
    </>
  );
}

export default Writing;
