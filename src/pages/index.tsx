import * as React from 'react'
import Link from 'gatsby-link'
import {BeforeAndAfter} from '../components/BeforeAndAfter'
import {PlaceInfo} from '../components/PlaceInfo'

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

const ExternalLink = (props: {children: string; link: string}) => (
  <a target="_blank" href={`http://${props.link}`}>
    {props.children}
  </a>
)
const Credit = (props: {phrase: string; children: string; link: string}) => (
  <span>
    {props.phrase} <ExternalLink {...props} />
  </span>
)

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
          <div className="two-columns">
            <p>California is in a housing crisis. For a sense of its scale:</p>
            <ul>
              <li>
                California added 334 thousand residents in 2017, while only 88
                thousand residences were built in that same period. That's roughly{' '}
                <ExternalLink link="www.dof.ca.gov/Forecasting/Demographics/Estimates/E-5/">
                  one home for every four people
                </ExternalLink>{' '}
                who've come to the state, and this pattern has held for decades.
              </li>
              <li>
                54% of renter households and 39% of mortgage holders paid over{' '}
                <ExternalLink link="calbudgetcenter.org/resources/californians-parts-state-pay-can-afford-housing">
                  30% of their income toward housing
                </ExternalLink>{' '}
                in 2015, and housing costs exceeded 50% of their income for half of
                each group.
              </li>
            </ul>
            <p>
              None of this will come as a surprise if you’ve spent any time in
              California, so I won't belabor the point. If you do want to learn more,{' '}
              <ExternalLink link="calbudgetcenter.org/resources/californians-parts-state-pay-can-afford-housing">
                Californians: Here's why your housing costs are so high
              </ExternalLink>{' '}
              is a great primer.
            </p>
            <p>
              We're lucky that people want to move here—California's economy is
              booming, and some of the most beautiful places in the county are right
              in our backyard. Newcomers want to participate in the opportunities
              available in our state, but a shortage of places to live make it hard
              for them to make those contributions.
            </p>
            <p>
              This shortage doesn't only hurt the people who move here. It reduces
              overall mobility, and it stagnates the economy for everyone.{' '}
              <ExternalLink link="faculty.chicagobooth.edu/chang-tai.hsieh/research/growth.pdf">
                Economists estimate
              </ExternalLink>{' '}
              that land-use restrictions reduced U.S. GDP as a whole by roughly 9%
              each year since the 1960s. (Even if we assume that's an order of
              magnitude off, at 0.9% per year, that compounds to a doubling of the
              economy that we missed out on!)
            </p>
            <p>
              This is not a new problem, but for the first time there's a proposal
              facing the state legislature that could make a dent: Senate Bill 827,
              or{' '}
              <ExternalLink link="leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB827">
                SB 827
              </ExternalLink>{' '}
              for short. The bill would up-zone areas near transit to allow for
              mid-rise housing. At a high level, the measure would:
            </p>
            <ul>
              <li>
                Eliminate many restrictions on the number of houses allowed to be
                built near transit stations,
              </li>
              <li>Block cities from imposing parking minimums, and</li>
              <li>
                Set minimum height limits ranging from 45 to 85 streets in places
                near transit.
              </li>
            </ul>
            <p>
              I've seen countless scary-sounding headlines like "<ExternalLink link="padailypost.com/2018/02/18/housing-bill-result-85-foot-tall-buildings-el-camino">
                Housing bill could result in 85-foot tall buildings on El Camino
              </ExternalLink>". I totally understand where these fears come from—I
              grew up around there, and it's frightening to think about how the
              places I love might change.
            </p>
            <p>
              However, when I dug into the numbers, not only were my fears
              alleviated, but I actually got really excited. Rather than the
              community-destroying godzilla it's been made out to be, SB 827 will
              make neighborhoods far more vibrant, eco-friendly, and equitable.
            </p>
            <p>
              The bill is technical and long, so to get an intuitive sense of what SB
              827 would make possible, some friends and I created renderings to
              illustrate its potential. We picked some vacant but promising lots
              located near transit throughout the state. In a few years they could be
              a new home for some friendly new neighbors. Use the sliders below to
              see what they could become!
            </p>
          </div>
        </div>
        <BeforeAndAfter before={Render08Before} after={Render08After} percent={65} />
        <PlaceInfo
          before={Render08Before_FullSize}
          after={Render08After_FullSize}
          emphasis="SB 827 means an affordable place to live could exist on every block"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.1963474816608!2d-117.084435970752!3d32.61190229881392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d94dd41d76dcf9%3A0xf2c2045a19309578!2s1041+Jefferson+Ave%2C+Chula+Vista%2C+CA+91911!5e0!3m2!1sen!2sus!4v1522210849364"
          address={['1041 Jefferson Ave', 'Chula Vista, CA 91911']}
        />

        <BeforeAndAfter before={Render06Before} after={Render06After} percent={45} />
        <PlaceInfo
          before={Render06Before_FullSize}
          after={Render06After_FullSize}
          emphasis="SB 827 means an affordable place to live could exist on every block"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d391.7260048928203!2d-122.6330726!3d38.2375615!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085b6aa0d6a5c49%3A0x4477696a140294f4!2s310+Wilson+St%2C+Petaluma%2C+CA+94952!5e0!3m2!1sen!2sus!4v1522212099560"
          address={['310 Wilson St', 'Petaluma, CA 94952']}
        />

        <BeforeAndAfter before={Render05Before} after={Render05After} percent={60} />
        <PlaceInfo
          before={Render05Before_FullSize}
          after={Render05After_FullSize}
          emphasis="SB 827 means an affordable place to live could exist on every block"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d793.1359663801818!2d-121.9107603!3d37.329631!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fcb5cf5d99191%3A0x989323c608a07f0c!2s1030+Garland+Ave%2C+San+Jose%2C+CA+95126!5e0!3m2!1sen!2sus!4v1522212783283"
          address={['310 Wilson St', 'Petaluma, CA 94952']}
        />
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
