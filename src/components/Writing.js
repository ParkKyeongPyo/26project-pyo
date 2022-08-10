import Footer from "./Footer.js";
import { db } from "../fbase.js";
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

import { Button, Comment, Form, Input, List } from "antd";
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

function Writing({ writingInfo, jobEng, userRN, loginState }) {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [dataChanged, setDataChanged] = useState(false);

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
      const user = authService.currentUser;
      const displayName = user.displayName;
      writerName = displayName;
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
      const user = authService.currentUser;
      const displayName = user.providerData[0].displayName;
      writerName = displayName;
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

  useEffect(() => {
    asyncFn();
  }, []);

  return (
    <>
      <div className={writing.flex}>
        <div>
          <div>
            <div className={writing.heading}>
              {writingInfo.제목.props.children[0].key}
            </div>
          </div>
          <div className={writing.detail}>
            <span>[{writingInfo.카테고리}]</span>
            <span className={writing.writer}>{writingInfo.글쓴이}</span>
            <span className={writing.fire}>[신고]</span> 
            <span className={writing.item}>조회 {writingInfo.조회}</span>
            <span>댓글 {comments.length}</span>
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
      <Footer />
    </>
  );
}

export default Writing;
