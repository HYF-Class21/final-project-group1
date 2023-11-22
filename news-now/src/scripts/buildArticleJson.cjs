// deprecated, don't run
const countries = ['us']
const categories = ['business','entertainment' ,'general','health' ]//,'science','sports','technology']

let articlesArr = [];

let promises = [];

const crypto = require('crypto');

const newsFetch = (category, country) => {
    const URL = `https://gnews.io/api/v4/top-headlines?category=${category}&lang=en&country=${country}&max=10&apikey=3bc59314dad78f32245a0750fa8c2589`;
    const promise = fetch(URL)
    .then((apiRes) => apiRes.json())
    .then((resJson) => {
        
        if (resJson.articles) {
            const articles = resJson.articles.map((article) => {
            
                article["country"] = country;
                article["category"] = category;
                article["id"] = crypto.createHash('sha256').update(article.url+article.title).digest('hex');
                return article;
            });
        } else {
            console.log(resJson.articles)
        }

        articlesArr = articlesArr.concat(articles);
        console.log(articles);
        console.log('iwork');
        }) // modify the json we've got if there's metadata to be removed. remove this line otherwise.
    .catch((err) => console.log(err));

    promises.push(promise);
}

for (let country of countries){
    for (let category of categories) {
        setInterval(newsFetch,2000, category, country)

    }
}

Promise.all(promises).then(() => {
    const fs = require('fs') 
    fs.writeFile("src/data/data.json", JSON.stringify(articlesArr), 'utf8', (err) => {console.log(err)})    
})