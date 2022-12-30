import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineArrowLeft, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import { useParams } from 'react-router-dom'

import "./style.css"

export default function ProductDetails() {
  const [data, setData] = useState({})
  const [isloading, setIsloading] = useState(true)
  const params = useParams();

  useEffect(() => {
    getProduct()
  }, [params.id])

  const getProduct = async () => {
    await axios.get(`https://fakestoreapi.com/products/${params.id}`)
      .then(res => {
        setData(res.data);
        console.log(res.data)
        setIsloading(false);
      })
      .catch(err => { console.log(err) })
  }

  return (

    <div className='productDetails_container'>
      <p> <AiOutlineArrowLeft /> Back</p>
      {isloading ? (
        <div className='lds-main '>
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

      ) : (
        <div className='product_details'>

          <div className='product_image'>
              <img src={data.image} alt="product_image" />
          </div>

          <div className='product_info'>
            <div className='information'>
              <p className='product_information'>
                  {data.title}
              </p>
              <p>
                $ {data.price}
              </p>
              <div className='productStars'>
                  <AiFillStar className={data.rating.rate >= 1 ? "on" : "off"} />
                  <AiFillStar className={data.rating.rate >= 2 ? "on" : "off"} />
                  <AiFillStar className={data.rating.rate >= 3 ? "on" : "off"} />
                  <AiFillStar className={data.rating.rate >= 4 ? "on" : "off"} />
                  <AiFillStar className={data.rating.rate >= 5 ? "on" : "off"} />
                <p>{data.rating.rate}</p>
              </div>
              <p className='rating_count'> {data.rating.count} rating count </p>
            </div>

            <div className='product_text'>
              <p>{data.description}</p>
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
      )}

    </div>
  )
}
