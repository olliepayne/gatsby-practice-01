/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
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
        <Heading
          sx={{
            color: 'themePink'
          }}
          as="h1"
          variant="styles.h1"
        >
          This is the homepage, {copyright}
        </Heading>
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