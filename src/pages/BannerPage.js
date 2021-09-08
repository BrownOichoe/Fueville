import React from "react";


function BannerPage() {
    return (
    <div className="banner">
        <span className="banner-left">
             <li>
                <a href="#">Temperature</a>
                <img></img>
            </li> 
             <li class="vl"> | </li>
             <li><a href="#">Precipitation</a></li> 
             <li class="vl"> | </li>
             <li><a href="#">Humidity</a></li> 
             <li class="vl"> | </li>
             <li><a href="#">Wind</a></li> 
        </span>
        <div className="banner-right">
            <div>Fueville,CA 99830</div>
            <div>Wednesday</div>
            <div>45</div>  
        </div>
     </div>
            
    );
};


export default BannerPage;