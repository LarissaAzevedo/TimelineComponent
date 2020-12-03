import React from "react";
import "./index.scss";

export const SubItem = ({ data }) => (
  <div className="subitem">
    <div className="subitem-content">
      <span className="tag" style={{ backgroundColor: data.category.color }}>
        {data.category.tag}
      </span>
      <time>{data.date}</time>
      <p>{data.text}</p>
      {data.link && (
        <a href={data.link.url} target="_blank" rel="noopener noreferrer">
          {data.link.text}
        </a>
      )}
      <span className="circle"></span>
    </div>
  </div>
);
