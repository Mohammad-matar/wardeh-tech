import React from 'react'
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md'
import "./style.css"


export default function Pagination() {
  return (
    <div className='pagination'>
      <MdArrowBackIosNew />
      <p className='pagination_number'>
        1
      </p>
      <MdArrowForwardIos />
      <p>page 1 of 10</p>
    </div>
  )
}
