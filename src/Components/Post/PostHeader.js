import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button.js";
import { PostContext } from "../../Context/PostContext.js";
const PostHeader = ({ read, title, id }) => {
  const { onRemove } = useContext(PostContext);
  return (
    <>
      <strong>{read ? <s>{title}</s> : title}</strong>
      <Button action={() => onRemove(id)}>
        <p>Remover</p>
      </Button>
      <br />
    </>
  );
};

PostHeader.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
};

export default PostHeader;
