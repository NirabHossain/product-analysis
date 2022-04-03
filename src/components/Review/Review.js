import React from 'react';
import './Review.css';
const Review = ({user}) => {
    const {name, review, rating} = user;
    return (
        <div className='mx-3 p-3 mt-2 rounded review'>
            <h4>{name}</h4>
            <strong>Review: </strong>
            <p>{review}</p>
            <p>Rating: <strong>{rating}</strong></p>
        </div>
    );
};

export default Review;