async function loadArticles() {
    console.log('Here')
    articles = await getArticles()

    const article_list = document.getElementById("articles");
    
    articles.forEach(article => {
        console.log(article)
        const newArticle = document.createElement("li");
        newArticle.innerText = article.title
        article_list.appendChild(newArticle)
    });



}


loadArticles();
getName();