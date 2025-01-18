import "../styles/CreatePost.css";

export function CreatePost() {
  return (
    <>
      <div className="create-post">
        <div className="post-inputs">
          <div className="left-box">
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
          <div className="right-box">
            <div className="input-box">
              <label htmlFor="post-content">Post Content: </label>
              <textarea
                name="post-content"
                id="post-content"
                rows={8}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="create-buttons">
          <button>Post</button>
          <button>Archive</button>
          <button>Delete</button>
        </div>
      </div>
    </>
  );
}
