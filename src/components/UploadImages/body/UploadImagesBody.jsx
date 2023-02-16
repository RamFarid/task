import React from 'react'
import Catalouge from './Catalouge/Catalouge'
import Filters from './FIlters/Filters'
import UploadedDocs from './Docs/UploadedDocs'

function UploadImagesBody() {
  return (
    <section className='body'>
      <div className='body-wrapper'>
        <Catalouge />
        <Filters />
        <UploadedDocs />
        <div className='btns-wrapper'>
          <button className='strict-btn'>Cancel</button>
          <button className='primary-btn'>Save</button>
        </div>
      </div>
    </section>
  )
}

export default UploadImagesBody
