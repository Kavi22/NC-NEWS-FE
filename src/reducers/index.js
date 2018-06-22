import {combineReducers} from 'redux';

import articles from './articles';
import topics from './topics';
import users from './users';

const reducer= combineReducers({
    articles: articles,
    topics: topics,
    users: users
});

export default reducer;