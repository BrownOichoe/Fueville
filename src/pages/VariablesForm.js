import React from "react";


function VariablesForm() {
    return (
        <div className="variables_form">
         
          <form action="" className="form">
             <div className="form_title">
                 <label>Enter values: </label>
             </div>
             <div className="form_div">
                  <input type="number" className="form_input" placeholder= " "/>
                  <label for="" className="form_label">Temperature</label>
             </div>
             <div className="form_div">
                  <input type="number" className="form_input" placeholder= " "/>
                  <label for="" className="form_label">Precipitation</label>
             </div>
             <div className="form_div">
                  <input type="number" className="form_input" placeholder= " "/>
                  <label for="" className="form_label">Humidity</label>
             </div>
             <div className="form_div">
                  <input type="number" className="form_input" placeholder= " "/>
                  <label for="" className="form_label">Wind</label>
             </div>
             <div className="form_button_div">
                  <button className="today_button">Use Today's values</button>
                  <button className="form_button">Go</button>
             </div>
          </form>
          </div>
    );
};

export default VariablesForm;