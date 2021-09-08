import React from "react";



function NavigationBar() {
    return (
        <header className="Nav_header">
            <img className="logo" src="images/logo.svg"></img>
            <nav className="navlinks">
                 <li><a href="#">Data</a></li> { "|" }
                 <li><a href="#">About</a></li>
            </nav>
        </header>
    );
};


export default NavigationBar;