import React, { useEffect, useState } from 'react'

const Articles = () => {

    const [articles , serArticles] = useState(null)

    useEffect(() =>{
        setTimeout(async() =>{
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')
            const data = await res.json()
            serArticles(data)
        } , 5000)
    })

    return (
        <div className = 'articles'>
            <h2>Articles</h2>

            {articles && articles.map(article => (
                <div className = 'article' key = {article.id}>
                    <h3>{article.title}</h3>
                    <p>{article.body}</p>
                </div>
            ))}

            {!articles && <div>Loading...</div>}

        </div>
    )
}

export default Articles
