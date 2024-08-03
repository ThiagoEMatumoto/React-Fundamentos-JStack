import React, { useState } from "react";
import Post from "./Components/Post.js";
import MyHeader from "./Components/MyHeader.js";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Titulo - 1",
      subtitle: "subtitulo - 1",
      likes: Math.floor(Math.random() * 10000),
      read: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 2",
      subtitle: "subtitulo - 2",
      likes: Math.floor(Math.random() * 10000),
      read: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 3",
      subtitle: "subtitulo - 3",
      likes: Math.floor(Math.random() * 10000),
      read: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 4",
      subtitle: "subtitulo - 4",
      likes: Math.floor(Math.random() * 10000),
      read: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 5",
      subtitle: "subtitulo - 5",
      likes: Math.floor(Math.random() * 10000),
      read: false,
    },
    {
      id: Math.random(),
      title: "Titulo - 6",
      subtitle: "subtitulo - 6",
      likes: Math.floor(Math.random() * 10000),
      read: false,
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
      },
    ]);
  };

  const handleRemovePost = (postID) => {
    setPosts((prev) => prev.filter((post) => post.id !== postID));
    console.log(`removi o ${postID}`);
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
    console.log("executei");
  };
  return (
    <>
      <MyHeader>
        <h3>Meu Título da página</h3>
        <button onClick={handleRefresh}>Atualizar</button>
      </MyHeader>
      {posts.map((post, i) => (
        <Post
          key={i}
          onRemove={handleRemovePost}
          onRead={handleReadPost}
          post={post}
        />
      ))}
    </>
  );
}

export default App;
