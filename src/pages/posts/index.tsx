/** @jsx jsx */
import { jsx } from 'theme-ui'
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const PostsIndexPage = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <main
        sx={{
          textAlign: 'center'
        }}
      >
        <h1
          sx={{
            
          }}
        >
          {/* <ul
            sx={{
              p: '0px',
              listStyleType: 'none'
            }}
          >
            {data.map(({ title }) => (
              <li>
                <h4>{title}</h4>
              </li>
            ))}
          </ul> */}
        </h1>
      </main>
    </Layout>
  )
}

export default PostsIndexPage

export const query = graphql`
  {
    file(name: {eq: "posts"}) {
      name
    }
  }
`