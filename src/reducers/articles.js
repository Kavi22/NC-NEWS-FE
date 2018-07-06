import * as types from '../types';

export const initialstate = {
    loading: false,
    error: null,
    allArticles: [],
    articleById: []
}

export default (prevState = initialstate, action)=> {
    switch (action.type) {
        // ALL ARTICLES
        case types.FETCH_ARTICLES_REQUEST:
            return Object.assign({}, prevState, {
                loading: !prevState.loading
            });

        case types.FETCH_ARTICLES_SUCCESS:
            return Object.assign({}, prevState, {
                loading: !prevState.loading,
                allArticles: action.payload
            });

        case types.FETCH_ARTICLES_FAILURE:
            return Object.assign({}, prevState, {
                loading: false,
                error: action.error
            });

        // ARTICLE BY ID
        case types.FETCH_ARTICLE_BY_ID_REQUEST:
            return Object.assign({}, prevState, {
                loading: !prevState.loading
            })
        case types.FETCH_ARTICLE_BY_ID_SUCCESS:
            return Object.assign({}, prevState, {
                loading: !prevState.loading,
                articleById: action.payload
            })
        case types.FETCH_ARTICLE_BY_ID_FAILURE:
            return Object.assign({}, prevState, {
                loading: false,
                error: action.error
            })

        default:
            return prevState;
    }
}

