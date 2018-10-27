import csv
import random

with open('socialdata.csv', mode='w') as data:
    
    data_write = csv.writer(data, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)

    # data_write.writerow([ 'Name', 'Username', 'Status' ])
    namefile = open("all_names.txt","r")
    names = []
    for line in namefile:
        names.append(line.split(None,1)[0])

    social_posts = 10 #Change posts if this is more than 10
    name_counter = 0
    posts = [ "Hello", "How Cool is this App?", "Bott.le!", "5 Stars",
              "Great app with a large potential of growth", "Nice!", "Can't wait for the next update",
              "Functinality App of the Year", "Keep up the amazing work", "Highly Reccomended" ]
    for i in range(social_posts):
        data_write.writerow([ names[name_counter]+" "+names[name_counter+1],
                              "@"+names[name_counter]+str(i*2), posts[i] ])
        name_counter += 10


# ----- TESTING ----- #
'''
testfile = open("socialdata.csv","r")
counter = 0
for line in testfile:
    #print(line.split(',')[-1][:-1])
    if line.split(',')[-1][:-1] == "Hello":
        counter += 1
print(counter)
#print("done?")
'''
print()
    

    
    
