import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ArticleCard = function (props) {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"><Link to={`/articles/${props.id}`}>{props.title}</Link></h5>
                <h6 className="card-subtitle mb-2 text-muted">Created By: {props.created_by}</h6>
                <h5 className="card-text">Category: {props.belongs_to}</h5>
                <h5 className="card-text">Votes: {props.votes}</h5>
            </div>
        </div>
    );
};

export default ArticleCard;

ArticleCard.propTypes = {
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    created_by: PropTypes.string.isRequired,
    belongs_to: PropTypes.string.isRequired,
};