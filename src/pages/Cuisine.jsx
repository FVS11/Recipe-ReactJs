import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import "@splidejs/splide/dist/css/splide.min.css";



const Cuisine = () => {

  const [cuisine, setCuisine] = useState([]);
  let params = useParams();



  const getCuisine = async (name) => {
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name})`)
    const recipes = await data.json()
    setCuisine(recipes.results)
    console.log(recipes.results)

  }

  useEffect(() => {
  
    getCuisine(params.type)
    console.log(params.type)
  }, [params.type])

  return (
    <div className='grid-cols-1  md:grid  md:grid-cols-3 justify-center	 items-center p-12'>
      {cuisine.map((recipes) => {
        return(
       
          <Link to={'/recipe/' + recipes.id}>
          <div className=' p-12 ml-4'>
            <img className=' w-full h-full object-cover bg-no-repeat shadow-2xl	  rounded-lg' src={recipes.image} alt="" />
            <h1 className='mt-4 text-lg'>{recipes.title}</h1>
          </div>
          </Link>

        )
      })}
    </div>
  )
}

{/* <motion.div className='max-w-full min-w-full min-h-full bg-white rounded-lg shadow-lg overflow-hidden'
whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
key={recipes.id}>
<Link to={`/recipe/${recipes.id}`}>
  <img className='max-w-full min-w-full min-h-full object-cover bg-no-repeat  top-0  left-0 rounded-lg ' src={recipes.image} alt={recipes.title} />
</Link>
</motion.div> */}
{/* <div className='grid auto-cols-fr'>
      
<div >
  {cuisine.map((item) => {
    return (
   
      <div key={item.id}>
        <img src={item.image} alt={item.title} className=' object-cover bg-no-repeat  top-0  left-0 rounded-lg '/>
        <h1>{item.title}</h1>

      </div>
    )

  })}
</div>

</div> */}
export default Cuisine