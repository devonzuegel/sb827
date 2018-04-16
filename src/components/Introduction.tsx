import * as React from 'react'

import {ExternalLink} from '../components/Links'

export const Introduction = () => (
  <div className="two-columns">
    <p>
      California is in a housing crisis. For a sense of its scale:
      {/* California's economy is booming, and it is one of the most beautiful parts of
      the country. A lot of people want to participate in opportunities here but
      can't because of a shortage of places to live. For a sense of its scale: */}
    </p>
    <ul>
      <li>
        In 2017, California added roughly{' '}
        <ExternalLink link="www.dof.ca.gov/Forecasting/Demographics/Estimates/E-5/">
          one home for every four people
        </ExternalLink>{' '}
        who came to the state, and this pattern has held for decades.
      </li>
      <li>
        54% of renter households and 39% of mortgage holders paid over{' '}
        <ExternalLink link="calbudgetcenter.org/resources/californians-parts-state-pay-can-afford-housing">
          30% of their income toward housing
        </ExternalLink>{' '}
        in 2015.
      </li>
    </ul>
    <p>
      We're <i>lucky</i> that people want to move here. Newcomers want to participate
      in the opportunities available in our state, but a shortage of places to live
      makes it hard for them to make those contributions.
    </p>
    <p>
      This is not a new problem, but for the first time there's a proposal facing the
      state legislature that could make a dent: Senate Bill 827 (<ExternalLink link="leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB827">
        SB 827
      </ExternalLink>). The bill would change zoning around transit to allow for
      mid-rise housing
    </p>
    <p>
      I've seen countless scary-sounding headlines like "
      <a
        target="_blank"
        rel="nofollow"
        href="http://padailypost.com/2018/02/18/housing-bill-result-85-foot-tall-buildings-el-camino"
      >
        Housing bill could result in 85-foot tall buildings on El Camino
      </a>". I totally understand where these fears come from—I grew up around there,
      and it's frightening to think about how the places I love might change.
    </p>
    <p>
      However, when I dug into the numbers, not only were my fears alleviated but I
      actually got really excited. Rather than the community-destroying godzilla it's
      been made out to be, SB 827 will make neighborhoods far more vibrant,
      eco-friendly, and equitable.
    </p>
    <p>
      To get an intuitive sense of what SB 827 would make possible, some friends and
      I created renderings to illustrate its potential. We picked a few vacant but
      promising lots located near transit throughout the state. In a few years they
      could be a new home for some friendly new neighbors. Use the sliders below to
      see what they could become!
    </p>
  </div>
)
