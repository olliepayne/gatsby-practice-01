/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'

const IndexPage = ({ data: { site: { siteMetadata: { title, description, copyright } } } }) => {
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
          This is the home page, {copyright}
        </h1>
      </main>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        copyright
      }
    }
  }
`