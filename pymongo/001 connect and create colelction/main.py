import pymongo
mycl = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = mycl['mydatabase2']
mycol = mydb['customers2']

print(mydb.list_collection_names())
y = mycol.insert_one({'name':"nouamane"})
print(y.inserted_id)


