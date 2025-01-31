import "../styles/FilterTabs.css";

export function FilterTabs(props) {
  const { setSelectedTab } = props;
  const tabs = ["Posts", "Drafts"];

  return (
    <div className="filter-tabs">
      {tabs.map((tab, tabIndex) => {
        return (
          <>
            <button
              className="filter-btn"
              key={tabIndex}
              onClick={setSelectedTab(tab)}
            >
              {tab}
            </button>
          </>
        );
      })}
    </div>
  );
}
