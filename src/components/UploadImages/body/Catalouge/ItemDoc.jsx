import React from 'react'
import tShirt from '../../../../assets/t-shirt.svg'
function ItemDoc({ active }) {
  return (
    <div className={active ? 'doc-item active' : 'doc-item'}>
      <img src={tShirt} alt='{file-name}' />
    </div>
  )
}

export default ItemDoc
