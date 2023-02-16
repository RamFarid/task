import React from 'react'
import tShirtIco from '../../../../assets/t-shirt.svg'
import gallery from '../../../../assets/img-gallery.svg'

function ViewItemDoc() {
  return (
    <figure>
      <div className='img-wrapper'>
        <img src={tShirtIco} alt='{folder-name}' />
      </div>
      <figcaption>
        <span className='doc-name'>SR23 - BOSS Black Menswear</span>
        <span className='doc-order'>
          <img src={gallery} alt='gallery-ico' />
          {'{13}/{50}'}
        </span>
      </figcaption>
    </figure>
  )
}

export default ViewItemDoc
