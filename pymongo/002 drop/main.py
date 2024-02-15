import pymongo
mycl = pymongo.MongoClient("mongodb://localhost:27017/")

print(mycl.list_database_names())
mycl.drop_database('mydatabase2')
print(mycl.list_database_names())


