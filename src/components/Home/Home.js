import React from 'react';
import { Link } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from '../Review/Review';
import shirt from './shirt.jpg';
import './home.css';
const Home = () => {
    const [reviews] = useReviews();
    // First 3 reviews
    const users3 = reviews.slice(0, 3);
    return (
        <div className=" my-5 container ">
            <div className='d-md-flex justify-content-around '>
                <div>
                    <h1>Heavy Metal <span style={{ color: "coral" }}>Store</span></h1>
                    <p className='mt-5'>Get your favorite shirt now. Customize your taste</p>
                    <p><strong>Try free for this month</strong></p>
                    <button className='more'>Learn More</button>
                </div>
                <div className='w-75' >
                    <img src={shirt} width="100%" alt="A t-shirt" />
                </div>
            </div>

            <div>
                <h3 className=' mt-5 text-center'>Customer Reviews</h3>
                <div className='reviews d-md-grid mt-5'>
                    {
                        users3.map(user => <Review user={user}  key={user._id}></Review>)
                    }
                </div>
            </div>



            
            <div className='text-center mt-5'>
                <button type="submit" className='btn btn-secondary review-button'><Link to="/reviews" >See All Reviews</Link></button>
            </div>

        </div>

    );
};

export default Home;