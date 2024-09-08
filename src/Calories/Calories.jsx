import React, { useState } from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./Calories.css";
import Navbar from "../Navbar/Navbar";

const Calories = () => {
  // MET values for different activities
  const metValues = {
    walking: 3.8,
    running: 9.8,
    cycling: 8.5,
  };

  const [weight, setWeight] = useState(0);
  const [time, setTime] = useState(0);
  const [met, setMet] = useState(null);
  const [calories, setCalories] = useState(0);

  const handleChangeWeight = (e) => {
    setWeight(Number(e.target.value));
  };

  const handleChangeTime = (e) => {
    setTime(Number(e.target.value));
  };

  const handleChangeMet = (e) => {
    setMet(metValues[e.target.value.toLowerCase()]);
  };

  const handleOnClick = () => {
    if (weight > 0 && time > 0 && met) {
      const caloriesBurned = met * weight * time;
      setCalories(caloriesBurned);
    } else {
      alert("Please enter all values correctly.");
    }
  };

  return (
    <>
      <Navbar />{" "}
      <div className="Container">
        <Card className="card">
          <Typography className="Card-header">
            How many Calories Burned
          </Typography>
          <CardContent className="input_field">
            <TextField
              onChange={handleChangeWeight}
              required
              label="Enter your weight in Kg"
              type="number"
            />
            <TextField
              onChange={handleChangeTime}
              required
              label="Time in hours"
              type="number"
            />
          </CardContent>
          <FormControl>
            <FormLabel className="Radio_header">
              Choose Activity (MET):
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              name="radio-buttons-group"
              className="RadioGroup"
              onChange={handleChangeMet}
            >
              <FormControlLabel
                value="Walking"
                control={<Radio />}
                label="Walking"
              />
              <FormControlLabel
                value="Running"
                control={<Radio />}
                label="Running"
              />
              <FormControlLabel
                value="Cycling"
                control={<Radio />}
                label="Cycling"
              />
            </RadioGroup>
          </FormControl>

          <CardActions>
            <Button variant="contained" onClick={handleOnClick}>
              Calculate Calories
            </Button>
          </CardActions>

          <Typography className="Result">
            Burned Calories: {calories.toFixed(2)}
          </Typography>
        </Card>
      </div>
    </>
  );
};

export default Calories;
