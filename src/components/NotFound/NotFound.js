import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center'>
            <h1 className='mt-5 bg-warning'>
                Error 404
            </h1>
            <p className='text-danger'>
                Sorry, the page you are asking for is not found. Please try again with the valid address.
            </p>
        </div>
    );
};

export default NotFound;