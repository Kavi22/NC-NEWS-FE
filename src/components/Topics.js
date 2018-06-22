import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllTopics} from "../actions/topics";


class Topics extends Component {
    componentDidMount(){
        this.props.fetchAllTopics()
    }

    render(){
        return (
            <div>
                <h1>All Topics</h1>
                {this.props.topics.map((topic, i) => {
                    return (
                        <div key={i}>
                            <ul>
                                <li>{topic.title}</li>
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
        loading: state.topics.loading,
        error: state.topics.error,
        topics: state.topics.payload
    }

}

function mapDispatchToProps(dispatch) {
    return {
        fetchAllTopics: (data)=>{
            dispatch(fetchAllTopics())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Topics);