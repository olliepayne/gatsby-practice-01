import React from 'react'
import Header from './Header/Header'

interface LayoutProps {
  children?: React.ReactNode | React.ReactNode[]
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout