import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { PostContext } from "../../Context/PostContext.js";
import { Title } from "./styles.js";
const PostHeader = ({ read, title, id }) => {
  const { onRemove } = useContext(PostContext);
  return (
    <>
      <Title>{read ? <s>{title}</s> : title}</Title>
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
