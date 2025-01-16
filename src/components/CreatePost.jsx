import "../styles/CreatePost.css";

export function CreatePost() {
  return (
    <>
      <div className="create-post">
        <div className="post-inputs">
          <div className="input-box">
            <label htmlFor="post-title">Post Title: </label>
            <input type="text" id="post-title" name="post-title" />
          </div>
          <div className="input-box">
            <label htmlFor="post-date">Post Date: </label>
            <input type="date" id="post-date" name="post-date" />
          </div>
          <div className="input-box">
            <label htmlFor="post-feeling">Feeling: </label>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
