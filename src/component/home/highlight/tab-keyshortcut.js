"use client"
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const TabComponent = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);
  const tabRef = useRef(null);

  const switchTab = (index) => {
    setActiveTab(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % tabs.length);
    }, 5000); // Change this value to set the interval time in milliseconds

    return () => clearInterval(interval);
  }, [tabs.length]);

  useEffect(() => {
    if (tabRef.current) {
      const activeTabElement = tabRef.current.children[activeTab];
      const containerWidth = tabRef.current.offsetWidth;
      const scrollLeft = activeTabElement.offsetLeft - (containerWidth - activeTabElement.offsetWidth) / 2;
      tabRef.current.scrollLeft = scrollLeft;
    }
  }, [activeTab]);

  return (
    <div className="tab-container">
      <div className="tabs tabs-keyboard" ref={tabRef}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab keyboard-tab ${index === activeTab ? "active-key" : "deactive-key"}`}
            onClick={() => switchTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane ${index === activeTab ? "active" : ""} ${index < activeTab ? "slide-left" : "slide-right"}`}
            style={{ display: index === activeTab ? "block" : "none" }}
          >
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
