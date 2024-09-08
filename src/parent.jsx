import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Steps from "./Steps";

const ParentComponent = () => {
  const [entry, setEntry] = useState({
    TotalStep: 0,
  });

  const handleStepsSubmit = (formData) => {
    setEntry({ TotalStep: formData });
  };

  return (
    <div>
      <Steps onSubmit={handleStepsSubmit} />
      <Dashboard entry={entry} />
    </div>
  );
};

export default ParentComponent;
