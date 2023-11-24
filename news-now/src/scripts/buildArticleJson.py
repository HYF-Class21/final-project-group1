import requests as r
import time
import json
import hashlib

countries = ["us","jp","ua","ie","pl"]
categories = ["business", "entertainment", "general", "health","science","sports","technology"]
articlesArr = []

for country in countries:
    for category in categories:
        url = f'https://gnews.io/api/v4/top-headlines?category={category}&lang=en&country={country}&max=10&apikey=9a90b00262aa5175a4a080db4a8b0ce1'
        articles = r.get(url).json()["articles"]
        
        for article in articles:
            article["country"] = country
            article["category"] = category
            article['id'] = hashlib.sha256((article['url'] + article['title']).encode('utf-8')).hexdigest()

        
        articlesArr.extend(articles)
        time.sleep(1)

with open("src/data/data.json", "w") as outfile:
    json.dump(articlesArr, outfile)
  
