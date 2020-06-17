import React, { Component } from 'react';
import api from '../../services/api'
import './styles.css'

export default class Main extends Component {

    state = {
        apiKey: '6f0e5cb8b8ec4cdcace917abb23157e5',
        country: this.props.country,
        category: this.props.category,
        articles: [],
        pageSize: 5,
        page: 1
    }

    componentDidMount() {
        this.loadNews();
    }
    
    componentDidUpdate(prevProps) {
        if (prevProps!== this.props) {
            this.setState(
                {country: this.props.country, category: this.props.category},
                () => this.loadNews())
        }
    }

    loadNews = async (page = 1) => {
        const response = await api.get(`/top-headlines?country=${this.state.country}&category=${this.state.category}&pageSize=${this.state.pageSize}&page=${page}&apiKey=${this.state.apiKey}`);
        const { status, totalResults, articles} = response.data;
        const { pageSize } = this.state
        const pages = Math.ceil(totalResults / pageSize);    
        this.setState({ status, totalResults, articles, pages})
    }

    prevPage = () => {
        const { page } = this.state;
        if ( page === 1 ) return;
        const pageNumber = page - 1;
        this.setState({ page: pageNumber });
        this.loadNews(pageNumber)
    }

    nextPage = () => {
        const { page, pages } = this.state;
        if (page === pages) return;
        const pageNumber = page + 1;
        this.setState({ page: pageNumber })
        this.loadNews(pageNumber)
    }

    render () {
        const { articles, pages, totalResults, pageSize, page } = this.state;

        return(
            <div className="articles-list">
                <div className="information-box">
                    Exibindo as {totalResults} principais notícias ({pageSize} notícias por página)
                </div>
                {articles.map(article =>(
                    <article key={article.title}>
                        <div>
                            <img className="article-image" src={article.urlToImage} />
                        </div>
                        <div className="article-content">
                            <strong><a href={article.url}>{article.title}</a></strong>
                            <small>{article.publishedAt}</small>
                            <p>
                                {article.description}
                            </p>
                        </div>
                    </article>
                ))}
                <div className="actions">
                    <button disabled={page===1} onClick={this.prevPage}>Anterior</button>
                        <span>Pagina {page} de {pages}</span>
                    <button disabled={page===pages} onClick={this.nextPage}>Próxima</button>
                </div>
            </div>
        )
    }

}