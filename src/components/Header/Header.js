import React from 'react'
import logo from '../../Images/aiffel_logo.png'
import userImage from '../../Images/profile.png'
import { HeaderContainer, Profile } from './style'
import Spacer from '../Spacer/Spacer'

function Header({ user }) {
  return(
    <HeaderContainer>
      <img src={logo} style={{ height: 30, marginLeft: 100}} />
      
      <Profile>
        <img src={userImage} style={{ height: 30 }}/>
        <Spacer right={30} />
        <div>{user.username ? user.username : 'test'}</div>
      </Profile>
    </HeaderContainer>
  )
}

export default Header