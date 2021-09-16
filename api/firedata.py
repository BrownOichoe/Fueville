
import pandas as pd;



def importData():
    dataset = pd.read_csv("akff_download.csv")
    to_drop = ['NAME','ADJECTIVE-SPRUCE', 'ADJECTIVE-GRASS','CDSR','HR','DATE','STATIONID']
    dataset.drop(columns=to_drop,inplace=True)
    dataset.dropna(inplace=True)
    filename = "fireprediction_clean_data.csv"
    dataset.to_csv(filename, index=False)


def assignThresholds(clean_dataset,col_name,threshold_name,values):
    clean_dataset[threshold_name] = clean_dataset[col_name].apply(lambda value: 1
                                                          if value <= values[0] else 2
                                                              if value <= values[1] else 3
                                                                if value <= values[2] else 4
                                                                    if value >= values[3] else 5)
    clean_dataset[threshold_name] = pd.Categorical(clean_dataset[threshold_name], 
                                            categories=[1,2,3,4,5])                                                                


def assignHumidityThresholds(clean_dataset,col_name,threshold_name,values):
    clean_dataset[threshold_name] = clean_dataset[col_name].apply(lambda value: 1
                                                          if value >= values[3] else 2 
                                                              if value >= values[2] else 3
                                                                if value >= values[1] else 4
                                                                    if value >= values[0] else 5)
    clean_dataset[threshold_name] = pd.Categorical(clean_dataset[threshold_name], 
                                            categories=[1, 2, 3, 4,5])



  