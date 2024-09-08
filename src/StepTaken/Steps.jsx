import React, { useState } from "react";
import Card from "@mui/material/Card";

import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Steps.css";
import Navbar from "../Navbar/Navbar";

const Steps = () => {
  const [steps, setSteps] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [TotalStep, setTotalStep] = useState(null);

  const handleChange = (e) => {
    setSteps(Number(e.target.value));
    setTotalStep(null); // Reset total step on new input
    setIsSubmitted(false);
  };
  const handleClick = (e) => {
    e.preventDefault();
    const calculatedSteps = steps / 0.762;
    setTotalStep(calculatedSteps);
    setSteps("");
    // setSteps(steps / 0.762);
    setIsSubmitted(true);
  };

  return (
    <>
      <Navbar />

      <div className="Container">
        <Card className="card">
          <CardContent className="CardContent">
            <Typography
              className="Card-header"
              gutterBottom
              variant="h5"
              component="div"
            >
              StepUp
            </Typography>
            <div>
              <DirectionsWalkIcon
                sx={{
                  fontSize: 200,
                  color: "blue",
                  alignItems: "center",
                  marginLeft: "100px",
                }}
              />
            </div>
            <TextField
              required
              type="number"
              label="Enter Distance in Meter"
              onChange={handleChange}
              className="input_field"
            />
          </CardContent>
          <CardActions>
            <Button
              type="submit"
              variant="contained"
              onClick={handleClick}
              disabled={isSubmitted}
            >
              Submit
            </Button>
          </CardActions>
          <Typography
            className="Result"
            gutterBottom
            variant="h5"
            component="div"
          >
            Your Total Step Is : {TotalStep}
          </Typography>
        </Card>
      </div>
    </>
  );
};
export default Steps;
