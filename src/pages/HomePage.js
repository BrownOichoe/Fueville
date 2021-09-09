import React, { useState, useEffect } from "react";

import LandingPage from "./LandingPage";
import NavigationBar from "./NavigationBar";


function HomePage() {
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        fetch('/time').then(res => res.json()).then(data => {
            setCurrentTime(data.time)
        });
    }, []);

    return (
      <div>
        <NavigationBar />
        
        <LandingPage />
        <div>
          <h1>
             Welcome to Fueville
          </h1>  
          <p>
             The current time is {currentTime}.
          </p>
        </div>
    </div>
    );
}

    
export default HomePage