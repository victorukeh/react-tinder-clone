import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person'
import IconButton from '@material-ui/core/IconButton'
import ForumIcon from '@material-ui/icons/Forum'
import TinderLogo from '../assets/img/tinder_logo.png'
const Header = () => {
  return (
    <div className='header'>
      {/* To create ripple effect use Icon button */}
      <IconButton>
        <PersonIcon fontSize='large' className='header__icon' />
      </IconButton>

      <img className='header__logo' src={TinderLogo} alt='' />

      <IconButton>
        <ForumIcon fontSize='large' className='header__icon' />
      </IconButton>
    </div>
  )
}

export default Header
