import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import "./WorkOut.css";
import Navbar from "../Navbar/Navbar";

const WorkOut = () => {
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [TotalTime, setTotalTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else if (!isActive && time !== 0) {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
    setTotalTime((prevTotal) => prevTotal + time);
    setTime(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="Container">
      <Navbar />
      <Card className="card">
        <Typography className="Card-header">
          Workout Time: {formatTime(time)}
        </Typography>
        <div className="Button">
          <Button
            className=" button"
            variant="contained"
            onClick={startTimer}
            disabled={isActive}
          >
            Start WorkOut
          </Button>

          <Button
            className="button"
            variant="contained"
            onClick={stopTimer}
            disabled={!isActive}
          >
            End WorkOut
          </Button>
        </div>

        <Typography className="Result">
          Total WorkOutTime:{TotalTime}
        </Typography>
      </Card>
    </div>
  );
};

export default WorkOut;
