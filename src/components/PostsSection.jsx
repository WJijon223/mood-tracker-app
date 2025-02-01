import "../styles/PostsSection.css";
import "../components/Post.jsx";
import { Post } from "../components/Post.jsx";

export function PostsSection(props) {
  const { entries, selectedTab } = props;

  const filterEntries =
    selectedTab == "Posts"
      ? entries.filter((entry) => entry.posted)
      : entries.filter((entry) => !entry.posted);

  return (
    <>
      {filterEntries.map((entry, entryIndex) => {
        return (
          <Post
            key={entryIndex}
            entry={entry}
            entryIndex={entries.findIndex(
              (val) => val.content == entry.content
            )}
            {...props}
          />
        );
      })}
    </>
  );
}
