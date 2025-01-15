import "../styles/CreatePost.css";

export function CreatePost() {
  return (
    <>
      <div className="create-post">
        <div className="post-inputs">
          <label htmlFor="post-title">Post Title: </label>
          <input type="text" id="post-title" name="post-title" />
          <label htmlFor="post-feeling">Feeling: </label>
          <input type="text" />
        </div>
      </div>
    </>
  );
}
