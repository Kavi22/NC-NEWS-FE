import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllUsers} from "../actions/users";

class Users extends Component {
    componentDidMount(){
        this.props.fetchAllUsers()
    }

    render(){
        return (
            <div>
                <h1>All Users</h1>
                {this.props.users.map((user, i) => {
                    return (
                        <div key={i}>
                            <ul>
                                <li>{user.username}</li>
                                <li>{user.name}</li>
                                <img src={user.avatar_url} alt="Smiley face"/>

                            </ul>

                        </div>
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        loading: state.users.loading,
        error: state.users.error,
        users: state.users.payload
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchAllUsers: (data)=> {
            dispatch(fetchAllUsers())
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(Users);