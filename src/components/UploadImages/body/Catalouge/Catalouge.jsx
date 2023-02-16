import React from 'react'
import ItemDocWrapper from './ItemDocWrapper'
import ViewItemDoc from './ViewItemDoc'
import ItemDoc from './ItemDoc'
import { AiOutlinePlus } from 'react-icons/ai'
function Catalouge() {
  return (
    <div className='catalouge bg-w'>
      <ViewItemDoc />
      <ItemDocWrapper>
        <ItemDoc active={true} />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
        <ItemDoc />
      </ItemDocWrapper>
      <button className='primary-btn'>
        Add more <AiOutlinePlus />
      </button>
    </div>
  )
}

export default Catalouge
