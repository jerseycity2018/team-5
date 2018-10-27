import csv
import random

with open('data.csv', mode='w') as newdata:
    
    data_write = csv.writer(newdata, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    data_write.writerow([ 'User_ID', 'Name', 'Username', 'Total_Bottles', 'Community' ])
    Nums = random.sample(range(1,1000), 50)
    
    for i in range(50):
        data_write.writerow([ str( Nums[i] ), "Test_Name " + str(i),
                              "Username" + str(i), str((i+1)*Nums[i]%100), str(10000 + (i*3)) ]);
        
    print()
    
    # print( type(Nums[1]))
    # data_write.writerow(['Joe Shmoe', 'IT', '35'])
            
