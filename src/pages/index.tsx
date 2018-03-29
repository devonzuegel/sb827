import * as React from 'react'
import Link from 'gatsby-link'

import {BeforeAndAfter} from '../components/BeforeAndAfter'
import {PlaceInfo} from '../components/PlaceInfo'
import {Credit, ExternalLink} from '../components/Links'
import {Introduction} from '../components/Introduction'

// Downloads
import * as Render05Before_FullSize from '../images/full-size/v05-photo_L.jpg'
import * as Render05After_FullSize from '../images/full-size/v05-2_L.jpg'
import * as Render06Before_FullSize from '../images/full-size/v06_photo.jpg'
import * as Render06After_FullSize from '../images/full-size/v06.jpg'
import * as Render08Before_FullSize from '../images/full-size/v08-photo_L.jpg'
import * as Render08After_FullSize from '../images/full-size/v08_L.jpg'

// Renders
import * as Render05Before from '../images/v05-photo_L.jpg'
import * as Render05After from '../images/v05-2_L.jpg'
import * as Render06Before from '../images/v06_photo.jpg'
import * as Render06After from '../images/v06.jpg'
import * as Render08Before from '../images/v08-photo_L.jpg'
import * as Render08After from '../images/v08_L.jpg'

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
          <h1>What would SB 827 mean for California?</h1>
          <Introduction />
        </div>
        <BeforeAndAfter before={Render08Before} after={Render08After} percent={65} />
        <PlaceInfo
          before={Render08Before_FullSize}
          after={Render08After_FullSize}
          emphasis="SB 827 means an affordable place to live could exist on every block"
          description={[
            'Most places in California have effectively legislated that the housing supply remain fixed as demand skyrockets. It is rarely explicit; rather it takes the form of low-density zoning, which puts a tiny cap on the number of people who can participate in the community. People are then forced to compete for what limited housing is available, which pushes prices up.',
            'TODO [Add more about how SB 827 would fix this problem]',
          ]}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.1963474816608!2d-117.084435970752!3d32.61190229881392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94dd41d76dcf9%3A0xf2c2045a19309578!2s1041+Jefferson+Ave%2C+Chula+Vista%2C+CA+91911!5e0!3m2!1sen!2sus!4v1522210849364"
          address={['1041 Jefferson Ave', 'Chula Vista, CA 91911']}
        />

        <BeforeAndAfter before={Render06Before} after={Render06After} percent={45} />
        <PlaceInfo
          before={Render06Before_FullSize}
          after={Render06After_FullSize}
          emphasis="SB 827 means that parents can spend time with their kids rather than commuting in their cars"
          description={[
            'TODO',
            `"We have a severe housing shortage and part of the problem is that core areas with transit access don't allow much housing," said Senator Scott Wiener, who proposed the bill. "That creates sprawl, huge commutes, and it's not sustainable."`,
          ]}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d391.7260048928203!2d-122.6330726!3d38.2375615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b6aa0d6a5c49%3A0x4477696a140294f4!2s310+Wilson+St%2C+Petaluma%2C+CA+94952!5e0!3m2!1sen!2sus!4v1522212099560"
          address={['310 Wilson St', 'Petaluma, CA 94952']}
        />

        <BeforeAndAfter before={Render05Before} after={Render05After} percent={60} />
        <PlaceInfo
          before={Render05Before_FullSize}
          after={Render05After_FullSize}
          emphasis="SB 827 means that we can reduce our carbon footprint"
          description={['TODO']}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.1359663801818!2d-121.9107603!3d37.329631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb5cf5d99191%3A0x989323c608a07f0c!2s1030+Garland+Ave%2C+San+Jose%2C+CA+95126!5e0!3m2!1sen!2sus!4v1522212783283"
          address={['310 Wilson St', 'Petaluma, CA 94952']}
        />
        <div className="section">
          <b>
            TODO: Add 4th image + "SB 827 means vibrant, beautiful neighborhoods",
            Paris, etc
          </b>
        </div>
        <div className="footer">
          <Credit
            phrase="Made by"
            children="Devon Zuegel"
            link="twitter.com/devonzuegel"
          />
          <span className="separator">•</span>
          <Credit
            phrase="Renderings by"
            children="Flora Bao"
            link="twitter.com/baoflora"
          />
          <span className="separator">•</span>
          Thanks to{' '}
          <ExternalLink
            children="Nat Friedman"
            link="twitter.com/natfriedman"
          />,{' '}
          <ExternalLink children="Louis Mirante" link="twitter.com/louismirante" />,
          &amp;{' '}
          <ExternalLink children="Hunter Owens" link="twitter.com/hunter_owens" />
        </div>
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
