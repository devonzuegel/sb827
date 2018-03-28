import * as React from 'react'
import Link, {withPrefix} from 'gatsby-link'
import {BeforeAndAfter} from '../components/BeforeAndAfter'
import {PlaceInfo} from '../components/PlaceInfo'
const Render05Before = withPrefix(require('../images/v05-photo_L.jpg'))
const Render05After = withPrefix(require('../images/v05-2_L.jpg'))
const Render06Before = withPrefix(require('../images/v06_photo.jpg'))
const Render06After = withPrefix(require('../images/v06.jpg'))
const Render08Before = withPrefix(require('../images/v08-photo_L.jpg'))
const Render08After = withPrefix(require('../images/v08_L.jpg'))

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
        <div className="section">
          <h2>SB827 means an affordable place to live could exist on every block</h2>
        </div>

        <BeforeAndAfter before={Render08Before} after={Render08After} percent={65} />
        <PlaceInfo
          before={Render08Before}
          after={Render08After}
          description="Loreimport { withPrefix } from 'gatsby-link'
m ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.1963474816608!2d-117.084435970752!3d32.61190229881392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94dd41d76dcf9%3A0xf2c2045a19309578!2s1041+Jefferson+Ave%2C+Chula+Vista%2C+CA+91911!5e0!3m2!1sen!2sus!4v1522210849364"
          address={['1041 Jefferson Ave', 'Chula Vista, CA 91911']}
        />

        <BeforeAndAfter before={Render06Before} after={Render06After} percent={45} />
        <PlaceInfo
          before={Render06Before}
          after={Render06After}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d391.7260048928203!2d-122.6330726!3d38.2375615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b6aa0d6a5c49%3A0x4477696a140294f4!2s310+Wilson+St%2C+Petaluma%2C+CA+94952!5e0!3m2!1sen!2sus!4v1522212099560"
          address={['310 Wilson St', 'Petaluma, CA 94952']}
        />

        <BeforeAndAfter before={Render05Before} after={Render05After} percent={60} />
        <PlaceInfo
          before={Render05Before}
          after={Render05After}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.1359663801818!2d-121.9107603!3d37.329631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb5cf5d99191%3A0x989323c608a07f0c!2s1030+Garland+Ave%2C+San+Jose%2C+CA+95126!5e0!3m2!1sen!2sus!4v1522212783283"
          address={['310 Wilson St', 'Petaluma, CA 94952']}
        />
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
