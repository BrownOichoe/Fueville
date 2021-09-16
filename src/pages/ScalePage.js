
import React, { useState } from "react";



function ScalePage() {

    const [ selected , setSelected ] = useState(false)

    const toggleTab = (value) => {
        setSelected(value)
    }

    return (
       
        <div className="scale_page"> 
            <div className="griditem">
                <div className={selected === false ? "item" : "item selected-item"} >
                    <span className="value_item" id="ext-value_item"></span>
                    <span className="description">
                        <div className="tag">EXT</div>
                        <div className="value">35+</div>
                    </span>
                </div>
                <div className={selected === false ? "item" : "item selected-item"}>
                    <span className="value_item" id="vhigh-value_item"></span>
                    <span className="description">
                        <div className="tag">VHIGH</div>
                        <div className="value">28 to 34.9</div>
                    </span>
                </div>
                <div className={selected === false ? "item" : "item selected-item"}>
                    <span className="value_item" id="high-value_item"></span>
                    <span className="description">
                        <div className="tag">HIGH</div>
                        <div className="value">18 to 27.9</div>
                    </span>
                </div>
                <div className={selected === false ? "item" : "item selected-item"}>
                    <span className="value_item" id="mod-value_item"></span>
                    <span className="description">
                        <div className="tag">MOD</div>
                        <div className="value">9 to 17.9</div>
                    </span>
                </div>
                <div className={selected === true ? "item" : "item selected-item"}>
                    <span className="value_item" id="low-value_item"></span>
                    <span className="description">
                        <div className="tag">LOW</div>
                        <div className="value">0 to 8.9</div>
                    </span>
                </div>
            </div>
            <div className="progressbar">
                <div className="circle">
                     
                     <h1>
                        45
                     </h1>
                     
                </div>
                <div className="fwi_label">
                    Fire Weather Index
                </div>
            </div>
        </div> 
    );
};

export default ScalePage;