import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import './style.css'

export default function CategorySubmenu() {
  const [categories, setCategories] = useState()
  const [isloading, setIsloading] = useState(true)

  useEffect(() => {
    getCategories()
  }, [])
  const getCategories = async () => {
    await axios.get('https://fakestoreapi.com/products/categories')
      .then(res => {
        setCategories(res.data);
        setIsloading(false);
      })
      .catch(err => { console.log(err) })
  }
  return (
    <div className='categorysubmenu_container'>
      <Link to="/" className='all_categories'>All Categories</Link>
      <hr />
      <ul>
        {isloading ? <></> : categories.map((category) => {
          return (
            <li key={category}>
              <NavLink
                to={`/categories/${category}`}
                className={({ isActive }) =>
                  isActive ? "active" : undefined
                }
              >
                {category}
              </NavLink>
            </li>
          )
        })}
      </ul>

    </div>
  )
}
