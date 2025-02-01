import "../styles/Post.css";

export function Post(props) {
  const { entry, entryIndex, handleDeleteEntry, handleArchiveEntry } = props;
  return (
    <div className="user-post">
      <h2>{entry.title}</h2>
      <div className="post-details">
        <h3 className="post-date">{entry.date}</h3>
        <h3 className="user-feeling">{entry.feeling}</h3>
      </div>
      <h4 className="post-content">{entry.content}</h4>
      <div className="post-buttons">
        <button
          className="post-btn"
          onClick={() => handleDeleteEntry(entryIndex)}
        >
          Delete
        </button>
        <button
          className="post-btn"
          onClick={() => handleArchiveEntry(entryIndex)}
          disabled={!entry.posted}
        >
          Archive
        </button>
      </div>
    </div>
  );
}
