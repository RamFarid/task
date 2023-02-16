import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import filtersIco from '../../../../assets/filters-ico.svg'
import FilterItem from './FilterItem'
import FiltersWrapper from './FiltersWrapper'
function Filters() {
  return (
    <div className='filters bg-w'>
      <div className='filter-inputs'>
        <label>
          <img src={filtersIco} alt='filters-icon' />
          Filters
        </label>
        <select>
          <option value='{value}'>{'{Brand}'}</option>
        </select>
        <div className='filter-input-wrapper'>
          <input type='text' />
          <div className='primary-btn'>
            <AiOutlinePlus />
          </div>
        </div>
      </div>
      <FiltersWrapper>
        <FilterItem txt='Adidas' />
        <FilterItem txt='Adidas' />
        <FilterItem txt='Adidas' />
        <FilterItem txt='Adidas' />
        <FilterItem txt='Adidas' />
        <FilterItem txt='Adidas' />
        <FilterItem txt='Adidas' />
        <FilterItem txt='Adidas' />
        <FilterItem txt='Adidas' />
      </FiltersWrapper>
    </div>
  )
}

export default Filters
