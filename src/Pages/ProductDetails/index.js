import React from 'react'
import { AiFillStar, AiOutlineArrowLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import logo from '../../images/IMAGE.png'

import "./style.css"

export default function ProductDetails() {
  return (
    <div className='productDetails_container'>
      <p> <AiOutlineArrowLeft /> Back</p>

      <div className='product_details'>

        <div className='product_image'>
          <img src={logo} alt="product_image" />
        </div>

        <div className='product_info'>

          <div className='information'>
            <p className='product_information'>
              Summer Dress
            </p>
            <p>
              $ 25
            </p>
            <div className='productStars'>
              <AiFillStar className={"on"} />
              <AiFillStar className={"on"} />
              <AiFillStar className={"on"} />
              <AiFillStar className={"on"} />
              <AiFillStar className={"on"} />
              <p>3.9</p>
            </div>
            <p className='rating_count'> 120 rating count </p>
          </div>

          <div className='product_text'>
            <p>Esta polera clásica,
              confeccionada en puro algodón orgánico,
              destaca por el logo de Tommy Hilfiger
              en la parte inferior.</p>
          </div>

          <div className='product_size_container'>
            <p>
              Choose Size
            </p>
            <ul className='sizes'>
              <li>XS </li>
              <li>S </li>
              <li>M </li>
              <li>L </li>
              <li>XL </li>
            </ul>
          </div>

          <div className='product_size_container'>
            <p>Quantity</p>
            <ul className='sizes'>
              <li className='produuct_quantity'> <AiOutlinePlus /> 1 <AiOutlineMinus /></li>
            </ul>
          </div>
          <button className='product_btn'> Add to cart</button>
        </div>
      </div>
    </div>
  )
}
