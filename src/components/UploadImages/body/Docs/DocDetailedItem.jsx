import React from 'react'
import { GrUnlink } from 'react-icons/gr'
import { MdDeleteForever } from 'react-icons/md'
import tShirt from '../../../../assets/t-shirt.svg'
function DocDetailedItem() {
  return (
    <div className='doc-detailed-item'>
      <img src={tShirt} alt='{doc name}' />
      <select>
        <option value='{value}'>{'Type'}</option>
      </select>
      <select>
        <option value='{value}'>{'Color code'}</option>
      </select>
      <button className='link-btn'>
        <GrUnlink size={14} />
      </button>
      <button className='delete-btn'>
        <MdDeleteForever size={14} />
      </button>
    </div>
  )
}

export default DocDetailedItem
