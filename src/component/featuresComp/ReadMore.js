import React, { useState } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p>
      {isReadMore ? text?.slice(0, 140) : text}
      {text?.length > 140 && (
        <span
          onClick={toggleReadMore}
          className="read-or-hide"
          style={{ color: "green", fontSize: "18px" }}
        >
          {isReadMore ? "...read more" : " show less"}
        </span>
      )}
    </p>
  );
};

export default ReadMore;
