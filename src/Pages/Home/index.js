import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagination from '../../Components/Pagination'
import ProductCard from '../../Components/ProductCard'
import "./style.css"

export default function Home() {
  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    await axios.get('https://fakestoreapi.com/products?limit=10')
      .then(res => {
        setData(res.data);
        setIsloading(false);
      })
      .catch(err => { console.log(err) })
  }
  return (
    <>
    <div className='home_main_container'>
      {isloading ? (
        <div className='lds-main '>
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
        </div>
      ) : data.map((product) => {
        return (
          <ProductCard key={product.id} product={product} />
        )
      })}
    </div>
      <Pagination />
    </>

  )
}
