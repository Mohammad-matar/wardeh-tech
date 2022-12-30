import React from 'react'
import logo from '../../images/logoo.png'
import Store from '../../images/Store.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { IoMdPerson, IoMdBasket } from 'react-icons/io'

import "./style.css"

export default function Navbar() {
  return (
    <div className='navbar_container'>
      <div className='navbar_logo'>
        <img className='logo' src={logo} alt="navbar-logo" />
        <img src={Store} alt="store" />
      </div>

      <div className='navbar_searchbar'>
        <input className='ipt-placeholder' type="text" placeholder="What are you looking for ?" />
        <AiOutlineSearch className='navbar-search-icon' />
      </div>
      <div className='navbar_static_icon'>
        <IoMdPerson className='icon' />
        <IoMdBasket className='icon' />
      </div>
    </div>
  )
}
