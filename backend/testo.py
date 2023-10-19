from pymongo import MongoClient
def func():
    client = MongoClient()
    client = MongoClient("localhost", 27017)
    db = client.test_database


    post = {
        "author": "Mike",
        "text": "My first blog post!",
        "tags": ["mongodb", "python", "pymongo"],
    }
    posts = db.posts
    post_id = posts.insert_one(post).inserted_id
