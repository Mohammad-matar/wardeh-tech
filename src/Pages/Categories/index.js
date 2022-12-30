import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard'
import './style.css'

export default function Categories() {
  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(true)
  const params = useParams();

  useEffect(() => {
    getProduct()
  }, [params.category])

  const getProduct = async () => {
    await axios.get(`https://fakestoreapi.com/products/category/${params.category}`)
      .then(res => {
        setData(res.data);
        console.log(res.data)
        setIsloading(false);
      })
      .catch(err => { console.log(err) })
  }
  return (
    <div>
      <div className='categories_title'>
        <div className='overlay'></div>
        <p> Shop Now In <span>Fashion</span> Category</p>
      </div>
      <div className='home_main_container'>
        {isloading ? (
        <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      ) : data.map((product) => {
          return (
            <ProductCard product={product} withCategory={false} />
          )
        })}

      </div>
    </div>
  )
}
