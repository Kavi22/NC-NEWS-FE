import axios from 'axios';
import * as types from '../types';

export function fetchUsersRequest(){
    return {
        type: types.FETCH_USERS_REQUEST
    };
}

export function fetchUsersSuccess(data){
    return {
        type: types.FETCH_USERS_SUCCESS,
        payload: data
    };
}

export function fetchUsersFailure(error){
    return {
        type: types.FETCH_USERS_FAILURE,
        error: error
    };
}

export function fetchAllUsers(data){
    return function (dispatch){
        axios.get('https://nc-newstw.herokuapp.com/api/users')
            .then(res => {
                dispatch(fetchUsersSuccess(res.data.users))
            })
            .catch(err =>{
                dispatch(fetchUsersFailure(err))
            })
    }
}