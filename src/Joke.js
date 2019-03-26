import React from 'react';

const Joke = (props) => {
    const { value } = props;

    return (
        <div className='col-6 d-flex align-items-center justify-content-center' >
            <div className='text-center'>
                {value}
            </div>
        </div>

    );
};

export default Joke;