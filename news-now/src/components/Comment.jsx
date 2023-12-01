import React from "react";
import styles from "./Comment.module.css";

const Comment = ({ comment }) => {
const formattedComment = comment.replace(/\n/, "<br>");

const currentTime = new Date();
const formattedTime = currentTime.toLocaleString('en-US');

return (
<div className={styles.container}>
<p className={styles.timeStamp}>{formattedTime}</p>
<div
className={styles.Scomment}
dangerouslySetInnerHTML={{ __html: formattedComment }}
/>
</div>
);
};

export default Comment;
