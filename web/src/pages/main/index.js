import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {
    state = {
        apiKey: '6f0e5cb8b8ec4cdcace917abb23157e5',
        country: 'us',
        articles: [],
        totalResults: 0,
        status: 'none',
        pageSize: 5,
        page: 1
    }

    componentDidMount() {
        this.loadNews();
    }

    loadNews = async () => {
        const response = await api.get(`/top-headlines?country=${this.state.country}&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=${this.state.apiKey}`);

        const { status, totalResults, articles } = response.data;

        this.setState({ status, totalResults, articles })
    }

    

    render () {
        const { articles, totalResults } = this.state;

        return(
            <div className="articles-list">
                {articles.map(article =>(
                    <article>
                        <div>
                            <img className="article-image" src={article.urlToImage} />
                        </div>
                        <div className="article-content">
                            <strong>{article.title}</strong>
                            <small>{article.publishedAt}</small>
                            <p>
                                {article.description}
                            </p>
                        </div>
                    </article>
                ))}
                <div className="actions">
                    <button>Anterior</button>
                    <button>Próxima</button>
                </div>
            </div>
        )
    }

}