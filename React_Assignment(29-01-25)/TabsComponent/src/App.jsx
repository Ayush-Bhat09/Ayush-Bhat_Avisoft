import { useState } from "react";
import "./App.css";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const tabs = [
    { id: "tab1", label: "Tab 1", content: "Content of Tab 1" },
    { id: "tab2", label: "Tab 2", content: "Content of Tab 2" },
    { id: "tab3", label: "Tab 3", content: "Content of Tab 3" },
  ];

  return (
    <div>
      <div className="tabs-container">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`tab ${activeTab === tab.id ? "active" : ""}`}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="tab-content">
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Tabs;

