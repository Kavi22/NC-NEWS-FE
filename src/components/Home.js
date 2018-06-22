import React, {Component} from 'react';
import {fetchAllArticles} from '../actions/articles';
import {connect} from 'react-redux';
import articles from "../reducers/articles";

class Home extends Component {

    componentDidMount(){
        this.props.fetchAllArticles()
    }

    render(){
        return (
            <div className="home">
                <h1>This is the Home page</h1>
                {this.props.articles.slice(0,10).map((article, i) => {
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



} //full comp

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
export default connect(mapStateToProps, mapDispatchToProps)(Home);