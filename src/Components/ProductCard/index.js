import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function ProductCard({ product, withCategory = true }) {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${product.id}`)
  }

  return (
    <div className='Home__container' onClick={handleClick}>
      <div className='home_card_container'>
        <img src={product.image} alt="img" />
        {withCategory && (
          <div className='category'>
            <h3>
              {product.category}
            </h3>
          </div>
        )}

      </div>

      <div className='home_card_description'>
        <div className='card_description'>
          <p className='product_title'> {product.title} </p>
          <p> ${product.price} </p>
        </div>

        <div className='card_description'>
          <div>
            <p className='home__rating'> Rating </p>
          </div>

          <div className='rating-stars'>
            <div className='stars'>
              <AiFillStar className={product.rating.rate >= 1 ? "on" : "off"} />
              <AiFillStar className={product.rating.rate >= 2 ? "on" : "off"} />
              <AiFillStar className={product.rating.rate >= 3 ? "on" : "off"} />
              <AiFillStar className={product.rating.rate >= 4 ? "on" : "off"} />
              <AiFillStar className={product.rating.rate >= 5 ? "on" : "off"} />
            </div>
            <p> {product.rating.count} rating count </p>
          </div>

        </div>
      </div>
    </div>
  )
}
