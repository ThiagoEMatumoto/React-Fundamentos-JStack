import React, { useContext } from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader.js";
import { PostContext } from "../../Context/PostContext.js";
import * as styles from "./Post.scss";
const Post = ({ post }) => {
  const { onRead } = useContext(PostContext);
  return (
    <>
      <article
        className={post.removed ? styles.body_deleted : styles.body}
        onClick={() => onRead(post.id)}
      >
        <PostHeader title={post.title} read={post.read} id={post.id} />
        <p>{post.subtitle}</p>
        <p>{post.likes}</p>
      </article>
      <br />
    </>
  );
};

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
    removed: PropTypes.bool.isRequired,
  }),
};

export default Post;
