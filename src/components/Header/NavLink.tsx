/** @jsx jsx */
import { jsx } from "theme-ui"
import { theme } from '../../gatsby-plugin-theme-ui/index'
import * as React from 'react'
import { Link } from 'gatsby'

interface NavLinkProps {
  url: string
  text: string
}
const NavLink = ({ url, text }: NavLinkProps) => {
  return (
    <Link
      sx={theme.links.nav}
      to={url}
    >
      {text}
    </Link>
  )
}

export default NavLink