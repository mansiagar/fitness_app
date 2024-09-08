import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Welcome = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashBoard");
  };
  return (
    <div>
      <h1>Welcome Our Fitness Tracker App</h1>
      <Button onClick={handleClick}>Trace Your Fitness</Button>
    </div>
  );
};

export default Welcome;
