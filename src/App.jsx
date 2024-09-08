import React from "react";
//import Steps from "./StepTaken/StepTaken";

import { HashRouter, Routes, Route } from "react-router-dom";
import Steps from "./StepTaken/Steps";
import Dashboard from "./Dashboard";
import Welcome from "./WelocmePage/Welcome";
import WorkOut from "./WorkOut/WorkOut";
import Calories from "./Calories/Calories";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/step" element={<Steps />} />
        <Route path="/workout" element={<WorkOut />} />
        <Route path="/Calories" element={<Calories />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
