import React from "react";
import { useSelector } from "react-redux";

const Laps = () => {
  let { laps } = useSelector((state) => state);

  return (
    <div> 
      <h1 className="lapHeadline">Added Laps</h1>
      <div className="laps">
      {laps.map((lap) => (
        <div className="lapInfo">
          <p>
            <span>{lap.minutes < 10 ? "0" + lap.minutes : lap.minutes} : </span>
            <span>{lap.seconds < 10 ? "0" + lap.seconds : lap.seconds} : </span>
            <span>{lap.milliseconds < 10 ? "0" + lap.milliseconds : lap.milliseconds}</span>
          </p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Laps;
