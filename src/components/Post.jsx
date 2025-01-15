import "../styles/Post.css";

export function Post() {
  return (
    <>
      <div className="user-post">
        <h2>Example Post Title</h2>
        <div className="post-details">
          <h3 className="post-date">12/19/2024</h3>
          <h3 className="user-feeling">Feeling: Excited</h3>
        </div>
        <h4 className="post-content">Post content yap yap yap</h4>
        <div className="post-buttons">
          <button className="post-btn">Delete</button>
          <button className="post-btn">Archive</button>
        </div>
      </div>
    </>
  );
}
