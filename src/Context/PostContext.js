import React, { useState, createContext } from "react";
import PropTypes from "prop-types";
export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Titulo - 1",
      subtitle: "subtitulo - 1",
      likes: Math.floor(Math.random() * 10000),
      read: false,
      removed: true,
    },
    {
      id: Math.random(),
      title: "Titulo - 2",
      subtitle: "subtitulo - 2",
      likes: Math.floor(Math.random() * 10000),
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 3",
      subtitle: "subtitulo - 3",
      likes: Math.floor(Math.random() * 10000),
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 4",
      subtitle: "subtitulo - 4",
      likes: Math.floor(Math.random() * 10000),
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 5",
      subtitle: "subtitulo - 5",
      likes: Math.floor(Math.random() * 10000),
      read: false,
      removed: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 6",
      subtitle: "subtitulo - 6",
      likes: Math.floor(Math.random() * 10000),
      read: false,
      removed: false,
    },
  ]);
  const handleRefresh = () => {
    setPosts((prev) => [
      ...prev,
      {
        id: Math.random(),
        title: `Titulo - ${posts.length + 1}`,
        subtitle: `subtitulo - ${posts.length + 1}`,
        likes: Math.floor(Math.random() * 10000),
        read: false,
        removed: false,
      },
    ]);
  };

  const handleRemovePost = (postID) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postID
          ? {
              ...post,
              removed: true,
            }
          : post
      )
    );
  };

  const handleReadPost = (postID) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === postID
          ? {
              ...post,
              read: !post.read,
            }
          : post
      )
    );
  };
  return (
    <PostContext.Provider
      value={{
        onRefresh: handleRefresh,
        onRemove: handleRemovePost,
        onRead: handleReadPost,
        posts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

PostProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
