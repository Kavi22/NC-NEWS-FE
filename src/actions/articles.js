import axios from 'axios';
import * as types from '../types';

// ALL ARTICLES
export function fetchArticlesRequest(){
    return {
        type: types.FETCH_ARTICLES_REQUEST
    };
}

export function fetchArticlesSuccess(data){
    return {
        type: types.FETCH_ARTICLES_SUCCESS,
        payload: data
    };
}

export function fetchArticlesFailure(error){
    return {
        type: types.FETCH_ARTICLES_FAILURE,
        error: error
    };
}

export function fetchAllArticles(data){
    return function (dispatch){
        dispatch(fetchArticlesRequest());
        axios.get('https://nc-newstw.herokuapp.com/api/articles')
            .then(res => {
                dispatch(fetchArticlesSuccess(res.data.articles))
            })
            .catch(err =>{
                dispatch(fetchArticlesFailure(err))
            })
    }
}

// ARTICLE BY ID

export function fetchArticleByIdRequest(){
    return {
        type: types.FETCH_ARTICLE_BY_ID_REQUEST
    };
}

export function fetchArticleByIdSuccess(data){
    return {
        type: types.FETCH_ARTICLE_BY_ID_SUCCESS,
        payload: data
    }
}

export function fetchArticleByIdFailure(error){
    return {
        type: types.FETCH_ARTICLE_BY_ID_FAILURE,
        error: error
    }
}

export function fetchArticleById(id){
    return function (dispatch){
        dispatch(fetchArticleByIdRequest());
        axios.get(`https://nc-newstw.herokuapp.com/api/articles/${id}`)
            .then(res => {
                dispatch(fetchArticleByIdSuccess(res.data))
            })
            .catch(err => {
                dispatch(fetchArticleByIdFailure(err))
            })

    }
}