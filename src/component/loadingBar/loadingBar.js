import React, { useState, useEffect } from "react";

const LoadingBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // This will run once when the component mounts
    setIsVisible(true);

    // This cleanup function will be called when the component unmounts
    return () => {
      setIsVisible(false);
    };
  }, []); // The empty dependency array ensures that this effect runs only once

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="loading-bar">
          <div>Meet the AI-driven Healthcare Service Suite</div>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
      {/* Rest of your page content goes here */}
    </>
  );
};

export default LoadingBar;
