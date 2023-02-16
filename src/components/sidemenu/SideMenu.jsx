import React from 'react'
import logo from '../../assets/lightbox.svg'
import MenuItem from './MenuItem'
import SubTitle from './SubTitle'
import { AiOutlineHome } from 'react-icons/ai'
import { FiUsers, FiUpload, FiAperture } from 'react-icons/fi'
import { BsHandbagFill, BsImageAlt } from 'react-icons/bs'
import { GiTShirt } from 'react-icons/gi'
import { GrNotes } from 'react-icons/gr'
import { TbNotes } from 'react-icons/tb'
import '../../Styles/upload-imgs.css'
function SideMenu() {
  return (
    <aside>
      <div className='logo-wrapper'>
        <img src={logo} alt='lightbox' />
        Lightbox
      </div>
      <SubTitle txt={'Dashboard'} />
      <MenuItem icon={<AiOutlineHome />} txt='Dashboard' url={'/'} />
      <SubTitle txt={'Users'} />
      <MenuItem icon={<FiUsers />} txt='Users' url={'/'} />
      <MenuItem icon={<BsHandbagFill />} txt='Users' url={'/'} />
      <SubTitle txt={'Stock'} />
      <MenuItem icon={<FiUpload />} txt='Upload' url={'/'} />
      <MenuItem
        icon={<BsImageAlt />}
        txt='Upload image'
        url={'/uploadimages'}
      />
      <MenuItem icon={<GrNotes />} txt='Catalogues' url={'/'} />
      <MenuItem icon={<GiTShirt />} txt='Products' url={'/'} />
      <MenuItem icon={<TbNotes />} txt='Price list' url={'/'} />
      <MenuItem icon={<FiAperture />} txt='Variants' url={'/'} />
      <SubTitle txt={'Order'} />
      <MenuItem icon={<GrNotes />} txt='Preorder' url={'/'} />
      <MenuItem icon={<GrNotes />} txt='Admin Preorder' url={'/'} />
    </aside>
  )
}

export default SideMenu
