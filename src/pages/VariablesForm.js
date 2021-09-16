import React, { useState } from "react";



function VariablesForm() {

     const [values, setValues] = useState({
          temperature: 0,
          rain: 0,
          humidity: 0,
          wind:0
     });


     const todaysValues = { temperature:45,rain:34,humidty:75,wind:10 }
     

     


     const handleTemperatureChange = (event) => {
          event.persist();
          setValues((values) => ({
               ...values,
               temperature: event.target.value,
          }));
     };

     const handleRainChange = (event) => {
          event.persist();
          setValues((values) => ({
               ...values,
               rain: event.target.value,
          }));
     };

     const handleHumidityChange = (event) => {
          event.persist();
          setValues((values) => ({
               ...values,
               humidity: event.target.value,
          }));
     };

     const handleWindChange = (event) => {
          event.persist();
          setValues((values) => ({
               ...values,
               wind: event.target.value,
          }));
     };


     const handlePrint = () => {
          console.log(values)
     }
    return (
        <div className="variables_form">
         
          <form action="" className="form" id="form1">
             <div className="form_title">
                 <label>Enter values: </label>
             </div>
             <div className="form_div">
                  <input type="number" className="form_input" placeholder= "" value={values.temperature} onChange={handleTemperatureChange}/>
                  <label htmlFor="" className="form_label">Temperature</label>
             </div>
             <div className="form_div">
                  <input type="number" className="form_input" placeholder= " "value={values.rain} onChange={handleRainChange}/>
                  <label htmlFor="" className="form_label">Precipitation</label>
             </div>
             <div className="form_div">
                  <input type="number" className="form_input" placeholder= " " value={values.humidity} onChange={handleHumidityChange}/>
                  <label htmlFor="" className="form_label">Humidity</label>
             </div>
             <div className="form_div">
                  <input type="number" className="form_input" placeholder= " "value={values.wind} onChange={handleWindChange}/>
                  <label htmlFor="" className="form_label" form=""> Wind</label>
             </div>
             
               <button className="form_button" type="button" form="form1" value="Submit" onClick={handlePrint}>Go</button>
             
          </form>
          </div>
    );
};

export default VariablesForm;