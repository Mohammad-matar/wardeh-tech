import React from 'react'
import logo from '../../images/logo.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdPerson, IoMdBasket } from 'react-icons/io'

import "./style.css"

export default function Navbar() {
  return (
    <div className='navbar_container'>
      <div className='navbar_logo'>
        <img src={logo} alt="navbar-logo" />
        <p> Store</p>
      </div>

      <div className='navbar_searchbar'>
        <input className='ipt-placeholder' type="text" placeholder="What are you looking for ?" />
        <AiOutlineSearch  className='navbar-search-icon'/>
      </div>
      <div className='navbar_static_icon'>
        <IoMdPerson />
        <IoMdBasket/>
      </div>
    </div>
  )
}
