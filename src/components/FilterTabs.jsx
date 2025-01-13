import "../styles/FilterTabs.css";

export function FilterTabs() {
  console.log("app component rendered");
  return (
    <div className="filter-tabs">
      <button className="filter-btn">Posts</button>|
      <button className="filter-btn">Drafts</button>
    </div>
  );
}
