/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import HeaderLogo from './HeaderLogo'
import Nav from './Nav'

const Header = () => {
  return (
    <header
      sx={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      }}
    >
      <HeaderLogo />
      <Nav />
    </header>
  )
}

export default Header