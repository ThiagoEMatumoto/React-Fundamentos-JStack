import React from "react";
import PropTypes from "prop-types";
const Post = ({ post, onRemove, onRead }) => {
  return (
    <>
      <article onClick={() => onRead(post.id)}>
        <strong>{post.read ? <s>{post.title}</s> : post.title}</strong>

        <button onClick={() => onRemove(post.id)}> Remover </button>
        {/* <button onClick={() => onRead(post.postID)}> Ler </button> */}
        <p>{post.subtitle}</p>
        <p>{post.likes}</p>
      </article>
      <br />
    </>
  );
};

Post.propTypes = {
  onRemove: PropTypes.func.isRequired,
  onRead: PropTypes.func.isRequired,
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }),
};

export default Post;
