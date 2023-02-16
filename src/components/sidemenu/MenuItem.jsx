import React from 'react'
import { NavLink } from 'react-router-dom'
function MenuItem({ txt, icon, url }) {
  return (
    <NavLink to={url} className='menu-item' end>
      {icon}
      {txt}
    </NavLink>
  )
}

export default MenuItem
