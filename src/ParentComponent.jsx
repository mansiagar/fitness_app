import React, { useState } from "react";
import Steps from "./StepTaken/Steps";
import Dashboard from "./Dashboard";

const ParentComponent = () => {
  const [totalSteps, setTotalSteps] = useState(null);

  const handleSetTotalSteps = (steps) => {
    console.log("Setting total steps to:", steps);
    setTotalSteps(steps); // This should update the totalSteps state
  };

  console.log("Total Steps in ParentComponent:", totalSteps);

  return (
    <div>
      {/* Pass totalSteps and onSetTotalSteps as props */}
      <Steps onSetTotalSteps={handleSetTotalSteps} />

      {/* Pass totalSteps to another component for display */}
      <Dashboard totalSteps={totalSteps} />
    </div>
  );
};

export default ParentComponent;
