import React from 'react'
import image from '../image 12.png'
import Ellipse from '../Ellipse.png'
import Star from '../Star.png'

const Card = ({ img, rating, reviewCount, country, title, price }) => {
  return (
    <div className='card'>
      <img src={image} alt='experience' />
      <div className='rating'>
        <img src={Star} alt='star' className='card-star' />
        <span>{rating}</span>
        <span className='gray'>{reviewCount} * </span>
        <span className='gray'>{country}</span>
      </div>

      <p>{title}</p>
      <p><b>From ${price}</b> / person</p>      
    </div>
  )
}

export default Card