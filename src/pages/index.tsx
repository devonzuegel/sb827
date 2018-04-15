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
          address={['1041 Jefferson Ave', 'Chula Vista, CA 91911']}
          impacts={[['Number of units', '51'], ['Occupancy', '102-126']]}
        />
        }
        <BeforeAndAfter before={Render06Before} after={Render06After} percent={65} />
        <PlaceInfo
          before={Render06Before_FullSize}
          after={Render06After_FullSize}
          emphasis="SB 827 means that parents can spend time with their kids rather than commuting in their cars"
          description={[
            <p>
              Housing prices in cities have risen faster than wages, pushing people
              ever further from their jobs. The result is tedious commutes,{' '}
              <a href="https://www.sfgate.com/bayarea/article/These-have-been-judged-the-Bay-Area-s-10-worst-12207607.php">
                traffic congestion
              </a>, and lost productivity. About{' '}
              <a href="https://www.nytimes.com/2018/03/16/business/energy-environment/climate-density.html">
                1 in 20
              </a>{' '}
              Bay Area commuters spends more than 90 minutes traveling to work, and
              that number is rising. That time would be better spent doing literally
              anything else, but we've given these workers little choice. Workers are
              forced to make a tradeoff—spend all of their time commuting, or spend
              all of their savings on housing close to work. Many people are deciding
              to opt out all together, moving out to settle down in more affordable
              regions.
            </p>,
            <p>
              This is not the natural ebb and flow of supply and demand. We have
              imposed an artificial shortage on housing similar to{' '}
              <a href="https://courses.lumenlearning.com/boundless-economics/chapter/impacts-of-monopoly-on-efficiency/">
                monopoly pricing
              </a>{' '}
              that results in deadweight loss. Current rules allow people who already
              have access to all California has to offer to exclude others from those
              same opportunities. This massively disadvantages the large number of
              people who are excluded at only a slight short-term advantage to the
              people who are already here.
            </p>,
            `Californians pride themselves on welcoming newcomers, but this is a hollow ideal if we don't create places for them to live. SB 827 would alleviate this artificial restriction, and its focus around transit would minimize any additional strain on our infrastructure.  It would allow more people to contribute to California's thriving economy, which is good for everyone.`,
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
          description={[
            `To achieve California's environmental goals, we need to revisit local zoning laws. These restrictions mandate low-density housing around transit, which limits the number of people who can use it, induces sprawl, and pushes people to drive more.`,
            <p>
              If people can live near transit, they'll be able drive less. This is a
              big deal—40 percent of California's carbon emissions are from
              transportation, so making a dent in this number is key to reducing our
              overall environmental impact. A{' '}
              <a href="https://uli.bookstore.ipgbook.com/growing-cooler-products-9780874201789.php">
                study from the Urban Land Institute
              </a>{' '}
              found that policies to promote compact growth—like SB 827—could cut
              vehicle travel by 40 percent.
            </p>,
            <p>
              "It'll give us a much better chance of meeting our climate goals,"{' '}
              <a href="https://www.curbed.com/2018/1/24/16928438/sb827-california-housing-crisis-senator-scott-wiener">
                said
              </a>{' '}
              Senator Scott Weiner, who proposed the bill. "We'll never meet them
              with our current land-use patterns."
            </p>,
          ]}
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
            `When a neighborhood reaps the benefits of regional and statewide projects, their development plans should reflect the resources that the broader community has funneled their way. I sympathize with the desire for local control, but it's unfair and inefficient for a place to reap the benefits of investment by the broader California community if they don't respond in kind by welcoming neighbors that infrastructure was intended to serve. It just doesn't make sense to spend millions of dollars on a new transit hub surrounded by low-density sprawl.`,
            `SB 827 would go far in righting this imbalance. The bill would cut some of the red tape around building around transit, enabling us to make the most of our transit investments.`,
          ]}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.4015937269373!2d-122.28537068400891!3d37.874289979741434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857ebe90b946ef%3A0xfee56f2e56062794!2sNorth+Berkeley+BART+Station!5e0!3m2!1sen!2sus!4v1523441743704"
          address={
            ['North Berkeley BART Station', 'Berkeley, CA 94702'] // TODO: update src
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
              transit. They manage to do this even while working with an 8 story
              limit throughout most of the city! Paris simultaneously supports a
              dense population and is one of the most livable cities in the world. We
              can do that in California, too, without sacrficing what we love about
              our communities.
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
          description={[
            <p>
              Here are a few pointers to get started learning more about California
              land use and how SB 827 would impact the state:
            </p>,
            <ul>
              <li>
                <a href="https://transitrichhousing.org/">
                  Visualize Transit-Rich Housing: What would SB 827 really look like?
                </a>{' '}
                is the most thorough, accessible, and even-handed analysis of the
                issue I've found. The best part is its awesome map showing how and
                where the bill would effect zoning throughout the state. Sasha (the
                author of the project) also did a great job explaining some of the
                technical weaknesses of the law.
              </li>
              <li>
                The <i>New York Times</i> published a good piece titled{' '}
                <a href="https://www.nytimes.com/2018/03/16/business/energy-environment/climate-density.html">
                  A Bold, Divisive Plan to Wean Californians From Cars
                </a>{' '}
                about the environmental impacts of California land use and how SB 827
                would reduce energy dependence.
              </li>
              <li>
                For a depressing view of the impact of the housing shortage on
                commutes:{' '}
                <a href="https://www.nytimes.com/2017/08/17/business/economy/san-francisco-commute.html">
                  A 2:15 Alarm, 2 Trains and a Bus Get Her to Work by 7 A.M.
                </a>
              </li>
              <li>
                Senator Scott Weiner answered common questions and concerns regarding
                the bill in a post{' '}
                <a href="https://extranewsfeed.com/my-transit-density-bill-sb-827-answering-common-questions-and-debunking-misinformation-226eaa7e1653">
                  here
                </a>.
              </li>
              <li>
                Not everyone supports SB 827. Here is a Change.org petition begun by
                some critics of the bill, which includes a good overview of the case
                against SB 827:{' '}
                <a href="https://www.change.org/p/california-state-legislature-no-to-sb-827-sb-828-stop-top-down-planning-unsustainable-high-density-housing-growth">
                  NO to SB 827 &amp; SB 828! Stop Top-Down Planning &amp;
                  Unsustainable High-Density Housing Growth!
                </a>{' '}
                As I've mentioned, I'm sympathetic to some of concerns but disagree
                with the conclusions.
              </li>
            </ul>,
            <p>
              If you have any questions, disagreements, or additions, please email me
              at <a href="mailto:devonzuegel@gmail.com">devonzuegel@gmail.com</a>! I
              (obviously) love discussing this stuff, and with an issue of this
              complexity there's always more to learn.
            </p>,
          ]}
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
          description={[
            <p>
              We're at an exciting inflection point. A pro-housing coalition has been
              building steam, and the movement includes grassroots groups, Governor
              Jerry Brown, legislators across the state, businesses of all sizes from
              every industry, and more. Legislation of this ambition would have been
              unthinkable just a few years ago, but now it's just a matter of time.
            </p>,
            <p>
              If you'd like to get involved, the nonprofit{' '}
              <a href="https://cayimby.org/take-action/find-local-yimbys/">
                California YIMBY
              </a>{' '}
              has good resources and my inbox is{' '}
              <a href="https://devonzuegel.com/page/contact">always open</a>.
            </p>,
            <p>
              Finally, if you'd like to make any changes to this site, feel free to
              <a href="https://github.com/devonzuegel/sb827">
                open a pull request
              </a>{' '}
              or let me know <a href="https://twitter.com/devonzuegel">on Twitter</a>/<a href="mailto:devonzuegel@gmail.com">
                via email
              </a>.{' '}
            </p>,
          ]}
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
