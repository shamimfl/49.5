import React, {  useState } from 'react';
import Food from './Food';
// useEffect, useRef,

const Search = () => {
    const [food, setFood] = useState([])
    const [carts , setCarts] = useState([])
    // const foodName=useRef();
    const searchFood = (e) => {
        e.preventDefault()
        const foodName = e.target.food.value;
        // fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName.current.value}`)
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${foodName}`)
            .then(res => res.json())
            .then(data => setFood(data))

    }

    const addToCart = (cart)=>{
        setCarts([...carts, cart])
    }

   
    return (
        <div>
            <form onSubmit={searchFood} className='bg-search p-10 h-96 flex justify-center items-center'>
                {/* ref={foodName} */}
                <input type="text" name='food'  className='w-2/5  p-2  rounded focus:outline-none focus:border-b-2 border-green-400' />
                <input type="submit" value='Search' className='border-2 border-orange-500 px-5 py-2 font-bold text-white cursor-pointer bg' />
            </form>

            <section className='flex justify-between gap-10 mt-10 p-10 '>
            <div className='w-3/4  grid lg:grid-cols-4 md:grid-cols-2 gap-5 '>
                {
                    food?.meals?.map(foods => <Food key={foods?.food?.idMeal} food={foods} addToCart={addToCart}></Food>) 
                }
            </div>
            <div className='w-1/4 bg-orange-400 p-10 '>
                <p className='text-center text-xl text-white '>Total : {carts.length}</p>
                {
                    carts.map(name => <li className='text-white ' style={{listStyle : 'number'}}>{name}</li>)
                }
            </div>
            </section>
            
        </div>
    );
};

export default Search;