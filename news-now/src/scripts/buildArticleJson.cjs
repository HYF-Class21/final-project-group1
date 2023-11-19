const countries = ['us','tw','ua','pt','po']
const categories = ['business','entertainment','general','health','science','sports','technology']

let articlesArr = [];

let promises = [];

for (let country of countries){
    for (let category of categories) {
        const URL = `https://newsapi.org/v2/top-headlines?category=${category}&country=${country}&apiKey=004bee58487d4810bc3da626634d2b85`;
        const promise = fetch(URL)
        .then((apiRes) => apiRes.json())
        .then((resJson) => {
            
            const articles = resJson.articles.map((article) => {
            
                article["country"] = country;
                article["category"] = category;
                return article;
            });

            articlesArr = articlesArr.concat(articles);
            console.log(articlesArr);
            console.log('iwork');
            }) // modify the json we've got if there's metadata to be removed. remove this line otherwise.
        .catch((err) => console.log(err));

        promises.push(promise);
    }
}

Promise.all(promises).then(() => {
    const fs = require('fs') 
    fs.writeFile("src/data/data.json", JSON.stringify(articlesArr), 'utf8', (err) => {console.log(err)})    
})

