import pymongo
mycl = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = mycl['company']
mycol = mydb['customers']

for y in mycol.find({},{'_id':0,'name':1,'address':0}):
    print(y)


