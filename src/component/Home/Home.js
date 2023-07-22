import React from 'react';

const Home = (props) => {
    const {clicked, setclicked} = props;
    return (
        <div>
            <h3>This is my Home Page {clicked}</h3>
        </div>
    );
};

export default Home;