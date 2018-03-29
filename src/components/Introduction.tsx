import * as React from 'react'

import {ExternalLink} from '../components/Links'

export const Introduction = () => (
  <div className="two-columns">
    <p>California is in a housing crisis. For a sense of its scale:</p>
    <ul>
      <li>
        California added 334 thousand residents in 2017, while only 88 thousand
        residences were built in that same period. That's roughly{' '}
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
        in 2015, and housing costs exceeded 50% of their income for half of each
        group.
      </li>
    </ul>
    <p>
      None of this will come as a surprise if you’ve spent any time in California, so
      I won't belabor the point. If you do want to learn more,{' '}
      <ExternalLink link="calbudgetcenter.org/resources/californians-parts-state-pay-can-afford-housing">
        Californians: Here's why your housing costs are so high
      </ExternalLink>{' '}
      is a great primer.
    </p>
    <p>
      We're lucky that people want to move here—California's economy is booming, and
      some of the most beautiful places in the county are right in our backyard.
      Newcomers want to participate in the opportunities available in our state, but
      a shortage of places to live make it hard for them to make those contributions.
    </p>
    <p>
      This shortage doesn't only hurt the people who move here. It reduces overall
      mobility, and it stagnates the economy for everyone.{' '}
      <ExternalLink link="faculty.chicagobooth.edu/chang-tai.hsieh/research/growth.pdf">
        Economists estimate
      </ExternalLink>{' '}
      that land-use restrictions reduced U.S. GDP as a whole by roughly 9% each year
      since the 1960s. (Even if we assume that's an order of magnitude off, at 0.9%
      per year, that compounds to a doubling of the economy that we missed out on!)
    </p>
    <p>
      This is not a new problem, but for the first time there's a proposal facing the
      state legislature that could make a dent: Senate Bill 827, or{' '}
      <ExternalLink link="leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB827">
        SB 827
      </ExternalLink>{' '}
      for short. The bill would up-zone areas near transit to allow for mid-rise
      housing. At a high level, the measure would:
    </p>
    <ul>
      <li>
        Eliminate many restrictions on the number of houses allowed to be built near
        transit stations,
      </li>
      <li>Block cities from imposing parking minimums, and</li>
      <li>
        Set minimum height limits ranging from 45 to 85 streets in places near
        transit.
      </li>
    </ul>
    <p>
      I've seen countless scary-sounding headlines like "<ExternalLink link="padailypost.com/2018/02/18/housing-bill-result-85-foot-tall-buildings-el-camino">
        Housing bill could result in 85-foot tall buildings on El Camino
      </ExternalLink>". I totally understand where these fears come from—I grew up
      around there, and it's frightening to think about how the places I love might
      change.
    </p>
    <p>
      However, when I dug into the numbers, not only were my fears alleviated, but I
      actually got really excited. Rather than the community-destroying godzilla it's
      been made out to be, SB 827 will make neighborhoods far more vibrant,
      eco-friendly, and equitable.
    </p>
    <p>
      The bill is technical and long, so to get an intuitive sense of what SB 827
      would make possible, some friends and I created renderings to illustrate its
      potential. We picked some vacant but promising lots located near transit
      throughout the state. In a few years they could be a new home for some friendly
      new neighbors. Use the sliders below to see what they could become!
    </p>
  </div>
)
