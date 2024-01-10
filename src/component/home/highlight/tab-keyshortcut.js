"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000); // Change this value to set the interval time in milliseconds

    return () => clearInterval(interval);
  }, [tabs.length]);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="tab-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab ${
              index === activeTab ? "active-key" : "deactive-key"
            }`}
            onClick={() => handleTabClick(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${index === activeTab ? "active" : ""}`}
            style={{ display: index === activeTab ? "flex" : "none" }}
          >
            {/* {tab.content} */}
            <Image
              src={tab.KeyboardImage}
              alt={tab.KeyboardImage}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabComponent;
