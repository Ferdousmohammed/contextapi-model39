import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../../App';
import CategoryDetail from '../CategoryDetail';

const Category = () => {
    const [category] = useContext(categoryContext)
    const allProduct = [
        {name: 'Lenovo', category: 'laptop'},  {name: 'Acer', category: 'laptop'}, {name: 'mobile', category: 'Itel'}, {name: 'mobile', category: 'Nokia'}, {name: 'sony', category: 'camera'}, {name: 'Codac', category: 'camera'}
    ]
    const [products, setProducts] = useState ([]);

    useEffect(() =>{
            const matchProduct = allProduct.filter(pd => pd.category === category);
            setProducts(matchProduct);
    }, [category])
    return (
        <div style={{color: 'green'}}>
            <h2>Select your Category: {category}</h2>
          {
            // products.map(pd => <CategoryDetail product ={pd} ></CategoryDetail>)
            products.map(pd => <CategoryDetail pro ={pd}></CategoryDetail>)
          }
        </div>
    );
};

export default Category;