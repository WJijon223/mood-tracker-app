import "../styles/Post.css";

export function Post() {
  return (
    <>
      <div className="user-post">
        <h2>Mental Wellness PSA</h2>
        <div className="post-details">
          <h3 className="post-date">12/19/2024</h3>
          <h3 className="user-feeling">Feeling: Excited</h3>
        </div>
        <h4 className="post-content">
          Mental wellbeing is a journey, not a destination. 🌱 Some days might
          feel harder than others, and that’s okay. It’s important to remember
          that small steps, like taking a break, practicing gratitude, or
          reaching out to a friend, can make a big difference over time. Your
          feelings are valid, and you don’t have to face them alone. Be kind to
          yourself today—you’re doing the best you can. 💛 #MentalWellbeing
          #SelfCare #YouAreNotAlone
        </h4>
        <div className="post-buttons">
          <button className="post-btn">Delete</button>
          <button className="post-btn">Archive</button>
        </div>
      </div>
    </>
  );
}
