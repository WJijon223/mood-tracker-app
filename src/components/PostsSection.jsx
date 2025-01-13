import "../styles/PostsSection.css";
import "../components/Post.jsx";
import { Post } from "../components/Post.jsx";

export function PostsSection() {
  return (
    <div className="posts-section">
      <Post />
    </div>
  );
}
