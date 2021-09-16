import React from "react";
import ScalePage from "./ScalePage";
import VariablesForm from "./VariablesForm";


function LandingPage() {

    return (
        <div className="landing">
          <div className="landing_form">
             <VariablesForm />
             <ScalePage />
          </div>
        </div>
    );
};

export default LandingPage;