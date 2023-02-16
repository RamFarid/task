import React from 'react'
import ToggleMenuBtn from './ToggleMenuBtn'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'
import user from '../../../assets/user.svg'
function Header() {
  return (
    <header>
      <ToggleMenuBtn />
      <div>
        <button className='order-btn'>
          <AiOutlinePlus />
          New order
        </button>
        <figure>
          <img src={user} alt='{Name}' />
          <IoIosArrowDown />
        </figure>
      </div>
    </header>
  )
}

export default Header
