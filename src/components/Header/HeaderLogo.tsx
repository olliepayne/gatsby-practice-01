/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { Link } from 'gatsby'

const HeaderLogo = () => {
  return (
    <Link
      sx={{
        color: 'themeBlack',
        textDecoration: 'none'
      }}
      to="/"
    >
      <h1>Gatsby.js Practice 01</h1>
    </Link>
  )
}

export default HeaderLogo