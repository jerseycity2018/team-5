import csv
import random

with open('data.csv', mode='w') as data:
    
    data_write = csv.writer(data, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    data_write.writerow([ 'User_ID', 'Name', 'Username', 'Total_Bottles', 'Community' ])
    values = 500
    nums = random.sample(range(1,1000), values)

    namefile = open("all_names.txt","r")
    names = []
    for line in namefile:
        names.append(line.split(None,1)[0])

    #print(len(names))
    #print(type(names[0]))
    name_counter = 0;
    for i in range(values):
        data_write.writerow([ str( nums[i] ), names[name_counter]+" "+names[name_counter+1],
                              "@"+names[name_counter]+str(i*2), str((i+1)*nums[i]%100),
                              str(int(10000 + (((i+1)*3) % (values/12)))) ])
        name_counter += 2
        
    # print( type(Nums[1]))
    # data_write.writerow(['Joe Shmoe', 'IT', '35'])


# ----- TESTING ----- #

testfile = open("data.csv","r")
counter = 0
for line in testfile:
    #print(line.split(',')[-1][:-1])
    if line.split(',')[-1][:-1] == str(10003):
        counter += 1

print(counter)
#print("done?")

print()
