import React, { useContext } from 'react';
import { useState } from 'react';
import { categoryContext } from '../../App';
const Head = () => {
    const [categorie, setClicked] = useContext(categoryContext);
    return (
        <div>
          
            <button onClick={() => setClicked('Laptop')}>Laptop</button>
            <button onClick={() => setClicked('Mobile')}>Mobile </button>
            <button onClick={() => setClicked('Camera')}>Camera</button>
        </div>
    );
};

export default Head;