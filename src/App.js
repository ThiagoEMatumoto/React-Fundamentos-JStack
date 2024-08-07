import React, { useContext } from "react";
import Post from "./Components/Post";
import MyHeader from "./Components/MyHeader";
import Button from "./Components/Button";
import { ThemeProvider } from "./Context/ThemeContext.js";
import { PostContext } from "./Context/PostContext.js";

function App() {
  const { onRefresh, posts } = useContext(PostContext);
  return (
    <ThemeProvider>
      <MyHeader title={"Aplicação React de Estudo"}>
        <h3>Meu Título da página</h3>
        <Button action={onRefresh}>
          <p>Atualizar</p>
        </Button>
      </MyHeader>
      {posts.map((post, i) => (
        <Post key={i} post={post} />
      ))}
    </ThemeProvider>
  );
}

export default App;
