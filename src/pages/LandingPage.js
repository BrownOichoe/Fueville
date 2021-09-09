import React from "react";
import BannerPage from "./BannerPage";
import ScalePage from "./ScalePage";
import VariablesForm from "./VariablesForm";


function LandingPage() {

    return (
        <div className="landing">
          <BannerPage  />
          <div className="landing_form">
             <VariablesForm />
             <ScalePage />
          </div>
        </div>
    );
};

export default LandingPage;