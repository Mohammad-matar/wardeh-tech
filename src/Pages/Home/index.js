import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../Components/ProductCard'
import "./style.css"

export default function Home() {
  const [data, setData] = useState([])
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    getProduct()
  }, [])

  const getProduct = async () => {
    await axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setData(res.data);
        console.log(res.data)
        setIsloading(false);
      })
      .catch(err => { console.log(err) })
  }
  return (
    <div className='home_main_container'>
      {isloading ? <> is loading...</> : data.map((product) => {
        return (
          <ProductCard product={product} />
        )
      })}

    </div>

  )
}
