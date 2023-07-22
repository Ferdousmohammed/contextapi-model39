import React, { useContext } from 'react';
import { categoryContext } from '../../App';

const CategoryDetail = (props) => {
  const {name} = props;
    return (
        <div>
            <h3 style={{color: 'red'}}>This is our Category Detail Page</h3>
            <p>This is our selected product Name {name}</p>

        </div>
    );
};

export default CategoryDetail;