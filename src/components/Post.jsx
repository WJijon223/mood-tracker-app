import "../styles/Post.css";

export function Post() {
  return (
    <>
      <div className="user-post">
        <h2>Example Post Title</h2>
        <div className="post-details">
          <h4 className="post-date">12/19/2024</h4>
          <h4 className="user-feeling">Feeling: Excited</h4>
        </div>
        <p>Post content yap yap yap</p>
      </div>
    </>
  );
}
