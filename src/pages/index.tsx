import * as React from 'react'
import Link from 'gatsby-link'
const Render05A = require('../images/v05-1_L.jpg')

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}

export default class extends React.Component<IndexPageProps, {}> {
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }

  public render() {
    return (
      <div>
        <div className="content">
          <h1>What's possible with SB 827?</h1>
        </div>
        <img style={{width: '100%'}} src={Render05A} alt="Logo" />
      </div>
    )
  }
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
