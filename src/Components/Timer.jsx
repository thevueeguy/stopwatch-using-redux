import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMilliseconds, setMinutes, setSeconds, setMillisecondsToZero, setSecondsToZero } from "../Actions/stopWatchActions";
import "../index.css";

const Timer = () => {
  let dispatch = useDispatch();
  let milliseconds = useSelector((state) => state.milliseconds);
  let seconds = useSelector((state) => state.seconds);
  let minutes = useSelector((state) => state.minutes);
  let isRunning = useSelector((state) => state.isRunning);
  let isPause = useSelector((state) => state.isPause);

  useEffect(() => {
    if (isRunning === true) {
        let timer = setInterval(() => {
          if (!isPause) {
            dispatch(setMilliseconds());
          }

          if (milliseconds + 1 === 100) {
            dispatch(setMillisecondsToZero());
            dispatch(setSeconds());
          }

          if (seconds / 60 === 1) {
            dispatch(setSecondsToZero());
            dispatch(setMinutes());
          }
        }, 10);

        return () => {
          window.clearInterval(timer);
        };
    }
  }, [milliseconds, seconds, minutes, isPause, isRunning]);

  return (
    <div className="timer">
      <p>
        <span>{minutes} : </span>
        <span>{seconds} : </span>
        <span>{milliseconds}</span>
      </p>
    </div>
  );
};

export default Timer;
