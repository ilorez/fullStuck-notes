import pymongo
mycl = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = mycl['exercice']
users = mydb['utilisateur']

users.insert_many(
    [
        {
            "name":"Ahmed",
            "age":20,
            "email":"Ahmed@gmail.com"
        },
        {
            "name":"hassan",
            "age":55,
            "email":"hassan@gmail.com"
        },
        {
            "name":"brahim",
            "age":44,
            "email":"brahim@gmail.com"
        }
    ]
)

adultUsers = users.find({"age":{"$gt":25}},{"_id":False,"name":True})
for user in adultUsers:
    print(user)

print("--------------")

# update 
# users.update_one({"name":"hassan"},{"$set":{"age":30}})

## --- supprimer
print(users.delete_one({'_id':users.find({}).limit(2)[0]['_id']}))



print("--------------")
