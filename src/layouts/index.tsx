import * as React from 'react'
import Link from 'gatsby-link'

const {Helmet} = require('react-helmet')

import './index.css'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

class DefaultLayout extends React.PureComponent<DefaultLayoutProps, void> {
  public render() {
    return (
      <div>
        <Helmet
          title="SB 827"
          meta={[
            {name: 'description', content: 'Sample'},
            {name: 'keywords', content: 'sample, something'},
          ]}
        />
        {this.props.children()}
      </div>
    )
  }
}

export default DefaultLayout
