import React from "react";
import Cookies from "js-cookie";
import styles from "./Comment.module.css";

const Comment = ({ comment }) => {
  const formattedComment = comment.replace(/\n/, "<br>");

  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleString("en-US");

  const user = Cookies.get("email");

  return (
    <div className={styles.container}>
      <img
        className={styles.avatar}
        src="https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        alt="avatar"
      />
      <div className={styles.commentContent}>
        <div className={styles.commentHeader}>
          <p className={styles.user}>{user}</p>
          <p className={styles.timeStamp}>{formattedTime}</p>
        </div>
        <div
        className={styles.comment}
        dangerouslySetInnerHTML={{ __html: formattedComment }}
      />
      </div>
    </div>
  );
};

export default Comment;
