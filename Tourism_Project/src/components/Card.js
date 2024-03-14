import React, { useState } from 'react'

export const Card = ({id,name,info,image,price,removeHandler}) => {

    const[readmore, setReadmore]=useState(false)


    const description = readmore ? info:`${info.substring(0,200)}...`;

    function readmoreHandler(){
        setReadmore(!readmore)
    }
  return (
    <div className='card'>
   
        <img className='image' src={image} alt=""></img>
        <div className='tour-info'>
        <div className='tour-details'>
        <h4 className='tour-price'> {price}</h4>
        <h4 className='tour-name'>{name}</h4>
        </div>
        <div className='description'>
            {description}
            <span className='read-more' onClick={readmoreHandler}>
               {readmore ? `Show Less`:`Read More`}
            </span>
        </div>
           
        </div>
        
        
        <button className='btn-red' onClick={()=> removeHandler(id)}>
              Not Intrested 
        </button>
    </div>
    

  )
}
 export default Card