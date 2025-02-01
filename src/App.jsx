import { Header } from "./components/Header";
import { FilterTabs } from "./components/FilterTabs";
import { PostsSection } from "./components/PostsSection";
import { CreatePost } from "./components/CreatePost";
import "./App.css";

import { useState } from "react";

function App() {
  const [entries, setEntries] = useState([
    {
      title: "Example Title!",
      content: `Mental wellbeing is a journey, not a destination. 🌱 Some days might
      feel harder than others, and that’s okay. It’s important to remember
      that small steps, like taking a break, practicing gratitude, or reaching
      out to a friend, can make a big difference over time. Your feelings are
      valid, and you don’t have to face them alone. Be kind to yourself
      today—you’re doing the best you can. 💛 #MentalWellbeing #SelfCare
      #YouAreNotAlone`,
      date: "11/11/2024",
      feeling: "Excited",
      posted: true,
    },
  ]);

  const [selectedTab, setSelectedTab] = useState("Posts");

  //Handling entries
  function handlePostEntry(index) {
    let newEntries = [...entries];
    newEntries[index].posted = true;
    setEntries(newEntries);
  }

  function handleCreateEntry(
    user_title,
    user_content,
    user_date,
    user_feeling,
    user_posted
  ) {
    let newEntries = [
      ...entries,
      {
        title: user_title,
        content: user_content,
        date: user_date,
        feeling: user_feeling,
        posted: user_posted,
      },
    ];
    setEntries(newEntries);
  }

  function handleArchiveEntry(index) {
    let newEntries = [...entries];
    newEntries[index].posted = false;
    setEntries(newEntries);
  }

  function handleDeleteEntry(index) {
    let newEntries = entries.filter((val, valIndex) => valIndex !== index);
    setEntries(newEntries);
  }

  return (
    <>
      <Header />
      <FilterTabs setSelectedTab={setSelectedTab} />
      <PostsSection
        selectedTab={selectedTab}
        entries={entries}
        handlePostEntry={handlePostEntry}
        handleDeleteEntry={handleDeleteEntry}
        handleArchiveEntry={handleArchiveEntry}
      />
      <CreatePost handleCreateEntry={handleCreateEntry} />
    </>
  );
}

export default App;
