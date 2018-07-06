import React, {Component} from 'react';
import {fetchArticleById} from '../actions/articles';
import {connect} from 'react-redux';

class Article extends Component {

    componentDidMount() {
        this.props.fetchArticleById(this.props.match.params.article_id)

    }

    render() {
        if (!this.props.article.article) return <p>Loading</p>
        return (
            <div className="article-by-id container">
                <div className="row">
                    <h1 className="text-center">{this.props.article.article.title}</h1>
                </div>
                <div className="row">
                    <div className="col-sm-1">
                        <h6>icon up</h6>
                        <p>{this.props.article.article.votes}</p>
                        <h6>icon down</h6>
                    </div>
                    <div className="col-sm-11">
                        <p>{this.props.article.article.body}</p>
                    </div>
                </div>

                <div className="row">
                    <p>Created By: {this.props.article.article.created_by} in {this.props.article.article.belongs_to}</p>
                </div>
            </div>


        ) // main return end

    } //render end
}

function mapStateToProps(state) {
    return {
        loading: state.articles.loading,
        error: state.articles.error,
        article: state.articles.articleById
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchArticleById: (id) => {
            dispatch(fetchArticleById(id))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Article);