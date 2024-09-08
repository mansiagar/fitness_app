import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Fitness Tracker
        </Typography>
        <Button color="inherit" component={Link} to="/Dashboard">
          Dashboard
        </Button>
        <Button color="inherit" component={Link} to="/step">
          StepUp
        </Button>
        <Button color="inherit" component={Link} to="/workout">
          WorkOut
        </Button>
        <Button color="inherit" component={Link} to="/Calories">
          Calories
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
