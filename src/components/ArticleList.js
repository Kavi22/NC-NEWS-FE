import React, {Component} from 'react';
import ArticleCard from './ArticleCard';
import {connect} from 'react-redux';
import {fetchAllArticles} from '../actions/articles';
import PropTypes from 'prop-types';

class ArticleList extends Component {

    componentDidMount () {
        this.props.fetchAllArticles();
    }

    render () {
        return (
            <div className="container" id='articleList'>
                <h1>Check out our Articles</h1>
                {this.props.articles.map(article =>
                    <ArticleCard
                        id={article._id}
                        title={article.title}
                        votes={article.votes}
                        key={article.title}
                        created_by={article.created_by}
                        belongs_to={article.belongs_to}
                        comments={article.comments}
                />)}
            </div>
        );
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchAllArticles : () => {
            dispatch(fetchAllArticles());
        }
    };
}

function mapStateToProps (state) {
    return {
        loading: state.articles.loading,
        error: state.articles.error,
        articles: state.articles.allArticles
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);

ArticleList.propTypes = {
    fetchAllArticles: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    articles: PropTypes.array.isRequired
};