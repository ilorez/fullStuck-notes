import pymongo
mycl = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = mycl['company']
mycol = mydb['customers']

mylist = [
    {'_id':1,'name':'ilorez','address':'apple st 652'},
    {'_id':1,'name':'najdaoui','address':'tasseltante 40000'},
    {'_id':1,'name':'simo','address':'agadir s 40659'},
    {'_id':1,'name':'ahmed','address':'casablanca Route 6'},
    {'_id':1,'name':'Ben','address':'Park Lane 38'}
]
y = mycol.insert_many(mylist)
print(y.inserted_ids)