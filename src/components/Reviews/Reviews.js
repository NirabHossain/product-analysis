import React from 'react';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div className='container  mt-5'>
            <h4>All reviews: </h4>
            <div className='reviews d-md-grid'>
                {
                    reviews.map(user => <Review user={user}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;