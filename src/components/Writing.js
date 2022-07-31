import { db } from "../fbase.js";
import {
  collection,
  query,
  where,
  getDocs,
  updateDoc,
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
    header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
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

function Writing({ job, writingInfo }) {
  const [comments, setComments] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState({})

  const user = authService.currentUser;

  const handleSubmit = () => {
    if (!value) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setValue("");
      setComments([
        ...comments,
        {
          author: user.providerData[0].displayName,
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
    }, 1000);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const asyncFn = async () => {
    const q = query(
      collection(db, job),
      where("num", "==", writingInfo.글번호)
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setData({
        content: doc.data().content,
        year: doc.data().year,
        time: doc.data().time,
        date: doc.data().date,
        reply: doc.data().reply,
      })
    });
  };

  useEffect(() => {
    asyncFn();
  }, []);

  console.log(data);

  
  return (
    <div className={writing.flex}>
      <div>
        <div>
          <div className={writing.heading}>{writingInfo.제목.props.children}</div>
        </div>
        <div className={writing.detail}>
        <span>[{writingInfo.카테고리}]</span>
          <span className={writing.writer}>{writingInfo.글쓴이}</span>
          <span>조회</span>
          <span>댓글</span>
        </div>
        <div className={writing.detail2}>
          <span>{data.year}-{data.date}  </span>
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
              onSubmit={handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
      </div>
    </div>
  );
}

export default Writing;
