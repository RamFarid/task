import React from 'react'
import { RxCross2 } from 'react-icons/rx'
function FilterItem({ txt }) {
  return (
    <span className='filter-item'>
      {txt}{' '}
      <div className='cls-btn'>
        <RxCross2 />
      </div>
    </span>
  )
}

export default FilterItem
