/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import NavLink from './NavLink'

const Nav = () => {
  return (
    <nav
      sx={{
        width: '20%'
      }}
    >
      <ul
        sx={{
          p: '0px',
          display: 'flex',
          justifyContent: 'space-around',
          listStyleType: 'none'
        }}
      >
        <li>
          <NavLink
            url="/about"
            text="About"
          />
        </li>
        <li>
          <NavLink
            url="/posts"
            text="Posts"
          />
        </li>
      </ul>
    </nav>
  )
}

export default Nav