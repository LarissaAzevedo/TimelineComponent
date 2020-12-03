import React from "react";
import "./index.scss";
import timelineData from "../../data";
import { SubItem } from "../SubItem";

export const Timeline = () =>
  timelineData.length > 0 && (
    <div className="timeline-container">
      {timelineData.map((data, index) => (
        <SubItem data={data} key={index} />
      ))}
    </div>
  );
