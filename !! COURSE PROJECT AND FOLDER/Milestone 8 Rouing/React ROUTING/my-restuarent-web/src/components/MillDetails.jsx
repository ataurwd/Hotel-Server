import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const MillDetails = () => {
    const fakeData = useLoaderData();
    const meal = fakeData.meals[0];
    return (
        <div>
            <h1>{meal.strMeal}</h1>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strInstructions}</p> 
            <Link className='btn btn-primary' to="/home">Back Home</Link>
        </div>
    );
};

export default MillDetails;
