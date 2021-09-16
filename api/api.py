import  firedata
from flask import Flask
import pandas as pd

app = Flask(__name__)


class Sale:
  def __init__(self, year, efficiency, sales):
    self.year = year
    self.efficiency = efficiency
    self.sales = sales

data = [
 Sale(1980,24.3,8949000),
 Sale(1985,27.6,10979000),
 Sale(1990,28.0,9303000),
 Sale(1991,28.4,8185000),
 Sale(1992,27.9,8213000),
 Sale(1993,28.3,8518000),
 Sale(1994,28.3,8991000),
 Sale(1995,28.6,8620000),
 Sale(1996,28.5,8479000),
 Sale(1997,28.7,8217000),
 Sale(1998,28.8,8085000),
 Sale(1999,28.3,8638000),
 Sale(2000,28.5,8778000),
 Sale(2001,28.8,8352000),
 Sale(2002,29.0,8042000),
 Sale(2003,29.5,7556000), 
 Sale(2004,29.5,7483000),
 Sale(2005,30.3,7660000),
 Sale(2006,30.1,7762000),
 Sale(2007,31.2,7562000),
 Sale(2008,31.5,6769000),
 Sale(2009,32.9,5402000),
 Sale(2010,33.9,5636000),
 Sale(2011,33.1,6093000),
 Sale(2012,35.3,7245000),
 Sale(2013,36.4,7586000),
 Sale(2014,36.5,7708000),
 Sale(2015,37.2,7517000),
 Sale(2016,37.7,6873000),
 Sale(2017,39.4,6081000),
]

clean_dataset = pd.read_csv("fireprediction_clean_data.csv")
@app.route('/data')



def get_current_data():
    firedata.importData()
    assignThresholdValues()
    
    temperature = 'ATF'
    humidity = 'RHP'
    windspeed = 'WSM'
    precipitation = 'PREC'
    fwi = 'FWI'
    
    
    values = [ ]
    tempValues = [ ]
    windValues = [ ]
    rainValues = [ ]
    humidityValues = [ ]
    fwiValues = [ ]
    for temp in clean_dataset[temperature]:
        item = { }
        item['temperature'] = temp 
        tempValues.append(item)
    

    values.append(tempValues)

    for hum in clean_dataset[humidity]:
        item = { }
        item['humidity'] = hum
        humidityValues.append(item)

    values.append(humidityValues)
    for wind in clean_dataset[windspeed]:
        item = { }
        item['wind'] = wind
        windValues.append(item)
    
    values.append(windValues)
    for rain in clean_dataset[precipitation]:
        item = { }
        item['precipitation'] = rain
        rainValues.append(item)
   
    values.append(rainValues)
    for fireIndex in clean_dataset[fwi]:
        item = { }
        item['fwi'] = fireIndex
        fwiValues.append(item)
    values.append(fwiValues)
    
    
    return { 'data': values }



def assignThresholdValues():
  
  #Some of the attributes in the data are mulitdimensional - with index-threshholds that indicate fire potential,ignition potential or fire intensity 
  #store attributes 
  #Adding derived data from fire interpretation scale 
  #Air Temperature in farenheight
  #Interprets fire intensity and crown fire potential
  temp_values = [50,59.9,69.9,80]
  temp_name = 'ATF'
  temp_threshname = 'ATF_Threshold'

  firedata.assignThresholds(clean_dataset,temp_name,temp_threshname,temp_values)

  #Relative Humidity Percent 
  #ignition potential and fine fuel moisture 
  hum_values = [20,30,40,50]
  hum_name = 'RHP'
  hum_threshname = 'RHP_Threshold'

  firedata.assignHumidityThresholds(clean_dataset,hum_name,hum_threshname,hum_values)

  #Fine Fuel Moisture Code
  #Below 74, little chance of ignition or surface 
  #Active spread at 80
  #High Ignition potential at 90 
  #Extreme fire behavior expected at 92 
  ffmc_values = [79.9,85.9,88.9,91.9,92]
  ffmc_name = 'FFMC'
  ffmc_threshname = 'FFMC_Threshold'

  firedata.assignThresholds(clean_dataset,ffmc_name,ffmc_threshname,ffmc_values)

  #Duff Moisture Code 

  dmc_values = [39.9,59.9,79.9,99.9,100]
  dmc_name = 'DMC'
  dmc_threshname = 'DMC_Threshold'

  firedata.assignThresholds(clean_dataset,dmc_name,dmc_threshname,dmc_values)


  #Drought Code 
  dc_values = [149.9,349.9,399.9,449.9,450]
  dc_name = 'DC'
  dc_threshname = 'DC_Threshold'

  firedata.assignThresholds(clean_dataset,dc_name,dc_threshname,dc_values)

  #Initial Spread Index
  isi_values = [1.9,4.9,7.9,10.9,11]
  isi_name ='ISI'
  isi_threshname = 'ISI_Threshold'

  firedata.assignThresholds(clean_dataset,isi_name,isi_threshname,isi_values)

  #Build Up Index 
  bui_values = [39.9, 59.9,89.9,109.9,110]
  bui_name = 'BUI'
  bui_threshname = 'BUI_Threshold'


  firedata.assignThresholds(clean_dataset,bui_name,bui_threshname,bui_values)

  #Fire Weather Index 
  fwi_values = [8.9,17.9,27.9,34.9,35] 
  fwi_name = 'FWI'
  fwi_threshname = 'FWI_Threshold'

  firedata.assignThresholds(clean_dataset,fwi_name,fwi_threshname,fwi_values)


  cols_to_norm = ['ATF','RHP','FFMC','DMC','DC','ISI','BUI','FWI']
  #col_to_normalize = [temp_threshname,hum_threshname,ffmc_threshname,dmc_threshname,dc_threshname,isi_threshname,bui_threshname,fwi_threshname]  
  #clean_dataset[col_to_normalize] = StandardScaler().fit_transform(clean_dataset[col_to_normalize])
  