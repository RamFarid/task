import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from '../components/sidemenu/SideMenu'
import '../Styles/main.css'
function Main() {
  return (
    <React.Fragment>
      <SideMenu />
      <Outlet />
    </React.Fragment>
  )
}

export default Main
