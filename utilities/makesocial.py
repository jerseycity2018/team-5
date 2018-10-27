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
    
    '''
    posts = [ "Hello", "How Cool is this App?", "Bott.le!", "5 Stars", "Nice!", 
              "Great app with a large potential of growth", "Can't wait for the next update",
              "Functinality App of the Year", "Keep up the amazing work", "Highly Reccomended" ]
    '''
    posts = [ "Just recycled 10 bottles #Bott.le",
              "Our Community just won! Time to go grocery shopping",
              "Learned about recycling and got points for perks #Recycling#Bott.le",
              "Finished recycling for the day with the amazing Bott.le app #Recycling",
              "Great app, great cashback #Bott.le",
              "Highly reccomend Bott.le. Got me to interact with my community! ",
              "Get cash for recycling trash! #Bott.le#Recycling",
              "Status Update: Recycled 5 bottles today",
              "Finished recycling, can't wait for the awaited driver scheduling update",
              "Just scanned the QR code for #Bott.le"  ]
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
    

    
    
