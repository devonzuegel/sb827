import * as React from 'react'
import Link from 'gatsby-link'

import {BeforeAndAfter} from '../components/BeforeAndAfter'
import {PlaceInfo} from '../components/PlaceInfo'
import {Credit, ExternalLink} from '../components/Links'
import {Introduction} from '../components/Introduction'
import {ThankYou, AboutProject} from '../components/Footer'

// Renders
import * as Render01Before from '../images/1-before.jpg'
import * as Render01After from '../images/1-after.jpg'
import * as Render02Before from '../images/2-before.jpg'
import * as Render02After from '../images/2-after.jpg'
import * as Render03Before from '../images/3-before.jpg'
import * as Render03After from '../images/3-after.jpg'
import * as Render04Before from '../images/4-before.jpg'
import * as Render04After from '../images/4-after.jpg'
import * as Render05Before from '../images/5-before.jpg'
import * as Render05After from '../images/5-after-B.jpg'
import * as Render06Before from '../images/6-before.jpg'
import * as Render06After from '../images/6-after.jpg'
import * as Render08Before from '../images/8-before.jpg'
import * as Render08After from '../images/8-after.jpg'

// Downloads
import * as Render01Before_FullSize from '../images/full-size/1-before.jpg'
import * as Render01After_FullSize from '../images/full-size/1-after.jpg'
import * as Render02Before_FullSize from '../images/full-size/2-before.jpg'
import * as Render02After_FullSize from '../images/full-size/2-after.jpg'
import * as Render03Before_FullSize from '../images/full-size/3-before.jpg'
import * as Render03After_FullSize from '../images/full-size/3-after.jpg'
import * as Render04Before_FullSize from '../images/full-size/4-before.jpg'
import * as Render04After_FullSize from '../images/full-size/4-after.jpg'
import * as Render05Before_FullSize from '../images/full-size/5-before.jpg'
import * as Render05After_FullSize from '../images/full-size/5-after-B.jpg'
import * as Render06Before_FullSize from '../images/full-size/6-before.jpg'
import * as Render06After_FullSize from '../images/full-size/6-after.jpg'
import * as Render08Before_FullSize from '../images/full-size/8-before.jpg'
import * as Render08After_FullSize from '../images/full-size/8-after.jpg'

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
  public render() {
    return (
      <div>
        <div className="section">
          <h1>What would SB 827 mean for California?</h1>
          <Introduction />
        </div>
        <BeforeAndAfter before={Render08Before} after={Render08After} percent={70} />
        <PlaceInfo
          before={Render08Before_FullSize}
          after={Render08After_FullSize}
          emphasis="SB 827 means an affordable place to live could exist on every block"
          description={[
            'Most places in California have effectively legislated that the housing supply remain fixed. Meanwhile, demand skyrockets. It is rarely explicit; rather it takes the form of low-density zoning, which puts a tiny cap on the number of people who can participate in the community. People are then forced to compete for what limited housing is available, which pushes prices up.',
            <p>
              This shortage doesn't only hurt the people who want to move here. It
              reduces overall mobility, and it stagnates the economy for everyone.{' '}
              <ExternalLink link="faculty.chicagobooth.edu/chang-tai.hsieh/research/growth.pdf">
                Economists estimate
              </ExternalLink>{' '}
              that land-use restrictions reduced U.S. GDP as a whole by roughly 9%
              each year since the 1960s. (Even if we assume that's an order of
              magnitude off, at 0.9% per year, that compounds to a doubling of the
              economy that we missed out on!)
            </p>,
            `SB 827 would do away with a lot of these arbitrary regulations that restrict where people can live. It would allow supply to begin to respond to demand, bringing us an important step closer to reining in the absurd cost of living in California.`,
          ]}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.1963474816608!2d-117.084435970752!3d32.61190229881392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94dd41d76dcf9%3A0xf2c2045a19309578!2s1041+Jefferson+Ave%2C+Chula+Vista%2C+CA+91911!5e0!3m2!1sen!2sus!4v1522210849364"
          address={['1039 Jefferson Ave', 'Chula Vista, CA 91911']}
          impacts={[['Number of units', '51'], ['Occupancy', '102-126']]}
        />
        }
        <BeforeAndAfter before={Render06Before} after={Render06After} percent={65} />
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
          impacts={[['Number of units', '3'], ['Occupancy', '6-10']]}
        />
        <BeforeAndAfter before={Render05Before} after={Render05After} percent={70} />
        <PlaceInfo
          before={Render05Before_FullSize}
          after={Render05After_FullSize}
          emphasis="SB 827 means that we can reduce our carbon footprint"
          description={['TODO']}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.1359663801818!2d-121.9107603!3d37.329631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb5cf5d99191%3A0x989323c608a07f0c!2s1030+Garland+Ave%2C+San+Jose%2C+CA+95126!5e0!3m2!1sen!2sus!4v1522212783283"
          address={['1030 Garland Ave', 'San Jose, CA']}
          impacts={[['Number of units', '17'], ['Occupancy', '18-24']]}
        />
        <br />
        <BeforeAndAfter before={Render01Before} after={Render01After} percent={65} />
        <PlaceInfo
          before={Render01Before_FullSize}
          after={Render01After_FullSize}
          emphasis="SB 827 means we can make full use of our infrastructure investments"
          description={[
            `We make massive investments in California's transit infrastructure, but they go underutilized. The core of the problem is that local zoning rules restrict the number of people this infrastructure can serve.`,
            `When a neighborhood reaps the benefits of regional and statewide projects, their development plans should reflect the resources that the broader community has funneled their way. I sympathize with the desire for local control, but it's not fair or efficient for a place to reap the benefits of investment by the broader California community if they don't respond in kind by welcoming neighbors that infrastructure was intended to serve. It just doesn't make sense to spend millions of dollars on a new transit hub surrounded by low-density sprawl.`,
            `SB 827 would go far to righting this imbalance. The bill would cut some of the red tape around building around transit, enabling us to make the most of our transit investments.`,
          ]}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.1359663801818!2d-121.9107603!3d37.329631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb5cf5d99191%3A0x989323c608a07f0c!2s1030+Garland+Ave%2C+San+Jose%2C+CA+95126!5e0!3m2!1sen!2sus!4v1522212783283"
          address={
            ['North Berkeley BART Station', 'Berkeley, CA'] // TODO: update src
          }
          impacts={[]}
        />
        <br />
        <BeforeAndAfter before={Render02Before} after={Render02After} percent={75} />
        <PlaceInfo
          before={Render02Before_FullSize}
          after={Render02After_FullSize}
          emphasis="SB 827 means vibrant, beautiful neighborhoods"
          description={[
            <p>
              A concern I hear a lot is that this bill could damage neighborhood
              character due to overcrowding, ugly condos, and so on. Again, I
              sympathize with this fear. As a Bay Area native, San Francisco's unique
              charm holds a special place for me, and I don't want the Painted Ladies
              to be replaced with a massive condo.
            </p>,
            <p>
              Fortunately, housing people and building beautiful neighborhoods are
              not mutually exclusive. In fact, they complement one another!
            </p>,
            <p>
              Paris, perhaps the most beloved city in the world, is a good
              illustration. It's gorgeous and does not feel overcrowded, so most
              people are shocked to learn that Paris has higher population density
              than New York City. A big part of what people love about the city is
              just how accessible everything is, which is only possible when there's
              a critical mass of people to support an abundance of shops, cafes, and
              transit. They manage to do this even while working with a 6 story limit
              throughout most of the city! Paris simultaneously supports a dense
              population and is one of the most livable cities in the world. We can
              do that in California, too, without sacrficing what we love about our
              communities.
            </p>,
          ]}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.1359663801818!2d-121.9107603!3d37.329631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb5cf5d99191%3A0x989323c608a07f0c!2s1030+Garland+Ave%2C+San+Jose%2C+CA+95126!5e0!3m2!1sen!2sus!4v1522212783283"
          address={
            ['4th and Colorado', 'Palo Alto, CA'] // TODO: update src
          }
          impacts={[['Number of units', '69'], ['Occupancy', '106']]}
        />
        <br />
        <BeforeAndAfter before={Render03Before} after={Render03After} percent={60} />
        <PlaceInfo
          before={Render03Before_FullSize}
          after={Render03After_FullSize}
          emphasis="Where can I learn more about SB 827?"
          description={['TODO']}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.1359663801818!2d-121.9107603!3d37.329631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb5cf5d99191%3A0x989323c608a07f0c!2s1030+Garland+Ave%2C+San+Jose%2C+CA+95126!5e0!3m2!1sen!2sus!4v1522212783283"
          address={
            ['Downtown Santa Monica'] // TODO: update src
          }
          impacts={[['Number of units', '46-52'], ['Occupancy', '65-84']]}
        />
        <br />
        <BeforeAndAfter before={Render04Before} after={Render04After} percent={65} />
        <PlaceInfo
          before={Render04Before_FullSize}
          after={Render04After_FullSize}
          emphasis="Where do we go from here?"
          description={[`We're at an exciting inflection point—`]}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.1359663801818!2d-121.9107603!3d37.329631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb5cf5d99191%3A0x989323c608a07f0c!2s1030+Garland+Ave%2C+San+Jose%2C+CA+95126!5e0!3m2!1sen!2sus!4v1522212783283"
          address={
            ['Diamond and Mission', 'South Pasadena'] // TODO: update src
          }
          impacts={[['Number of units', '46-52'], ['Occupancy', '65-84']]}
        />
        <br />
        <br />
        <br />
        {/* <AboutProject /> */}
        <ThankYou />
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
