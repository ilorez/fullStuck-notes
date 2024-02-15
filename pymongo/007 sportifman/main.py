from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db=client['DBsportifs_py']
collection=db.collection["sportif"]

#! insertion :
data=[
    {"_id":"sp1","nom":"radi","prenom":"abdselam","genre":"homme","sport":{"description":"marathon","olympique":True}},
    {"_id":"sp2","nom":"larbi","prenom":"benmbarek","genre":"homme","sport":{"description":"football","olympique":True}},
    {"_id":"sp3","nom":"elgourch","prenom":"mohamed","genre":"homme","nbmedailles":2,"sport":{"description":"cyclisme","olympique":True}},
    {"_id":"sp4","nom":"rabii","prenom":"mohamed","genre":"homme","nbmedailles":3,"sport":{"description":"box","olympique":True}},
    {"_id":"sp5","nom":"elguerrouj","prenom":"hicham","genre":"homme","nbmedailles":4,"sport":{"description":"athletisme","olympique":True}},
    {"_id":"sp6","nom":"abissourour","prenom":"sara","genre":"femme","sport":{"description":"volley ball","olympique":True}}
]
suiii=collection.insert_many(data)

#! affichage :
results=collection.find({})
for result in results:
    print(result)