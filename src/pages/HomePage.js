import React from "react";
import AboutPage from "./AboutPage";
import LandingPage from "./LandingPage";
import NavigationBar from "./NavigationBar";


function HomePage() {
    
    return (
      <div>
        <NavigationBar />
        <LandingPage />
        <AboutPage />
    </div>
    );
}

    
export default HomePage