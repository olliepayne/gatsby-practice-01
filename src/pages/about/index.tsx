/** @jsx jsx */
import { jsx } from 'theme-ui'
import * as React from 'react'
import Layout from '../../components/Layout'

const About = () => {
  return (
    <Layout>
      <main
        sx={{
          textAlign: 'center'
        }}
      >
        <h1
          sx={{
            color: 'themePink'
          }}
        >
          This is the about page
        </h1>
      </main>
    </Layout>
  )
}

export default About