import React, { useEffect, useState } from 'react';

const Category = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        fetch('category.json')
        .then(res => res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className='space-x-2 flex items-center w-[90%] mx-auto my-10'>
            {category.map(item => (
                <button key={item.idCategory} className='btn'> {item.strCategory}</button>
            ))}
        </div>
    );
};

export default Category;

// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// 