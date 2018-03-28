import * as React from 'react'
import Link from 'gatsby-link'
import BeforeAndAfter from '../components/BeforeAndAfter'
const Render05Before = require('../images/v05-photo_L.jpg')
const Render05After = require('../images/v05-2_L.jpg')
const Render06Before = require('../images/v06_photo.jpg')
const Render06After = require('../images/v06.jpg')
const Render08Before = require('../images/v08-photo_L.jpg')
const Render08After = require('../images/v08_L.jpg')

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

export default class extends React.Component<IndexPageProps, {after: number}> {
  state = {after: 80}
  constructor(props: IndexPageProps, context: any) {
    super(props, context)
  }

  public render() {
    return (
      <div>
        <div className="content">
          <h1>SB827 means an affordable place to live could exist on every block</h1>
        </div>
        <BeforeAndAfter before={Render08Before} after={Render08After} percent={65} />
        <br />
        <BeforeAndAfter before={Render06Before} after={Render06After} percent={45} />
        <br />
        <BeforeAndAfter before={Render05Before} after={Render05After} percent={60} />
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
