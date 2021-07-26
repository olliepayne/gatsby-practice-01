/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
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
      <Heading
        as="h1"
        variant="styles.h1"
      >
        Gatsby.js Practice 01
      </Heading>
    </Link>
  )
}

export default HeaderLogo