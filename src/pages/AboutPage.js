import React from "react";


function AboutPage() {

    return (
           <footer>
             <div className="about" id="about-footer">
                 <div className="footer-logo">
                    <h3>City of Fueville</h3>
                 </div>
               
                <div className="footer-about">
                    <div className="title">About</div>
                    <p>This application is used to predict the fire weather index of based on daily weather values.The values include Temperature,Rain,Humidity and wind.Plug in the values in the form above and see the results.</p>
                </div>
                <div className="footer-data">
                    <div className="title">Data</div>
                    <p>The data used in the model as well as the charts was sourced from the Alaska Fire Weather services.</p>
                </div>
                <div className="contacts">
                    <div className="title">Contacts</div>
                    <div className="footer-contact">
                        <img></img>
                        <div className="address"> 
                          <div>334 Fuevlille Aven</div>
                          <div>Fueville, Carlifornia</div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <img></img>
                        <div>756-433-2344</div>
                    </div>
                    <div className="footer-contact">
                        <img></img>
                        <div>seniorresearchanalyst@fueville.com</div>
                    </div>
                </div>
                
              </div>  
           </footer>
    );
};

export default AboutPage;