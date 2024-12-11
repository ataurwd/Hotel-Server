import React from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import Category from './Category';


const Home = () => {
    const data = useLoaderData();
    const fackData = data.meals;
    return (
        <div>
        <Category/>
                <div className='grid grid-cols-3 px-20 mt-12'>
                    {
                        fackData.map((item, index) => (
                            <div key={index} className='space-y-3 mb-8'>
                                <img className='w-[80%] rounded-md' src={item.strMealThumb} alt="" />
                                <h1 className='text-3xl font-bold'>{item.strMeal}</h1>
                                <ul className='grid grid-cols-2 font-semibold'>
                                    <li>{item.strIngredient1}</li>
                                    <li>{item.strIngredient2}</li>
                                    <li>{item.strIngredient3}</li>
                                    <li>{item.strIngredient4}</li>
                                </ul>
                                <div className='flex items-center'>
                                <Link className='btn btn-success' to={`/home/${item.idMeal}`}>Detais</Link>
                                <Link to={item.strYoutube} className='ml-52 w-10'>
                                <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="" />
                                </Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    );
};

export default Home;