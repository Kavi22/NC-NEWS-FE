import * as types from '../types';

export const initialstate = {
    loading: false,
    error: null,
    payload: []
}

export default (prevState = initialstate, action)=> {
    switch (action.type) {
        case types.FETCH_USERS_REQUEST:
            return Object.assign({}, prevState, {
                loading: !prevState.loading,
                error: null,
                payload: []
            });

        case types.FETCH_USERS_SUCCESS:
            return Object.assign({}, prevState, {
                loading: !prevState.loading,
                error: null,
                payload: action.payload
            });

        case types.FETCH_USERS_FAILURE:
            return Object.assign({}, prevState, {
                loading: false,
                error: action.error,
                payload: []
            });
        default:
            return prevState;
    }
}

