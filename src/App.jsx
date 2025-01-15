import { Header } from "./components/Header";
import { FilterTabs } from "./components/FilterTabs";
import { PostsSection } from "./components/PostsSection";
import { CreatePost } from "./components/CreatePost";
import "./App.css";

import { useState } from "react";

function App() {
  return (
    <>
      <Header />
      <FilterTabs />
      <PostsSection />
      <CreatePost />
    </>
  );
}

export default App;
