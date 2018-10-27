import csv
import random

with open('socialdata.csv', mode='w') as data:
    
    data_write = csv.writer(data, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    # data_write.writerow([ 'Name', 'Username', 'Status' ])
    namefile = open("all_names.txt","r")
    names = []
    for line in namefile:
        names.append(line.split(None,1)[0])

    
    # data_write.writerow([ 
    

    
    
