import React from 'react';

const RandomJokeButton = (props) => {
    const { 
        value, 
        handlerGetJokeByState } = props;

    return (
        <button className='btn btn-secondary' onClick={handlerGetJokeByState}>
            {value}
        </button>
    );
};

export default RandomJokeButton;