import React, {Component} from 'react';
import {fetchAllArticles} from '../actions/articles';
import {connect} from 'react-redux';

class Articles extends Component {

    componentDidMount(){
        this.props.fetchAllArticles()
    }

    render(){
        return (
            <div className="all-articles">

                <h1>This is the Articles page</h1>
                {this.props.articles.map((article, i) => {
                    return (
                        <div key={i}>
                            <ul>
                                <li>Article: {article.title}</li>
                                <li>Created By: {article.created_by}</li>
                                <li>{article.body}</li>
                                <li>Votes: {article.votes}</li>
                            </ul>

                        </div>
                    )
                })}

            </div>

        ) // main return end

    } //render end
}


function mapStateToProps(state){
    return {
        loading: state.articles.loading,
        error: state.articles.error,
        articles: state.articles.payload
    }
}

function mapDispatchToProps(dispatch) {

    return {
        fetchAllArticles: (data) => {
            dispatch(fetchAllArticles())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Articles);