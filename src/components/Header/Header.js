import React from 'react'
import { HeaderContainer, Profile } from './style'
import { Link } from 'react-router-dom'

// asset
import logo from '../../Images/aiffel_logo.png'
import userImage from '../../Images/profile.png'

// compoent
import Spacer from '../Spacer/Spacer'

function Header({ user }) {
  return(
    <HeaderContainer>
      <img alt="로고" src={logo} style={{ height: 30, marginLeft: 100}} />
      
      <Profile>
        <img alt="프로필 이미지" src={userImage} style={{ height: 30 }}/>
        <Spacer right={30} />
        <Link style={{ textDecoration: 'none', color: 'black'}} to='/profile'>
          <div>{user.username ? user.username : 'test'}</div>
        </Link>
      </Profile>
    </HeaderContainer>
  )
}

export default Header