import "../styles/PostsSection.css";
import "../components/Post.jsx";
import { Post } from "../components/Post.jsx";

export function PostsSection(props) {
  const { entries } = props;

  return (
    <>
      {entries.map((entry, entryIndex) => {
        return <Post key={entryIndex} entry={entry} />;
      })}
    </>
  );
}
