import React from "react";
import "../../styles/Tags.css"

const Tags = ({ tags }) => {
  return (
    <div className="tag-container">
      {tags.map((tag, index) => (
        <div className="tag" key={index}>
          <h3 className="tag-title">{tag}</h3>
        </div>
      ))}
    </div>
  );
};

export default Tags;
