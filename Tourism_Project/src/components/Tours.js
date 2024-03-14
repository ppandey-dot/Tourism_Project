import React from 'react'
import Card from './Card'

export const Tours = ({tours,removeHandler}) => {
  return (
    <div className='container'>
    <div>
        <h2 className='title'>Top Tourist Place For Visit</h2>
    </div>
    <div className='cards'>
    {
        tours.map( (tour) =>{
                 return <Card key={tour.id} {...tour} removeHandler={removeHandler}/>
                 })
        }
    </div>
        
    </div>
  )
}
  export default Tours;