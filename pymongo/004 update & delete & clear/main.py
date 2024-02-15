import pymongo
mycl = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = mycl['company']
mycol = mydb['customers']
myquery = {'address':'apple st 652'}

#// update

newvalues = {'$set':{'address':'marrakech tasseltante'}}
# b = mycol.update_one(myquery,newvalues)
b = mycol.update_many(myquery,newvalues)

#// delete
c = mycol.delete_many(myquery)

print(b.modified_count)


#// delete all clear
'''d = mycol.delete_many({})'''



# print(d)
print(b)
print(c)
for y in mycol.find():
    print(y)