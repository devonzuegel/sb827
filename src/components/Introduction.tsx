import * as React from "react";

import { ExternalLink } from "../components/Links";

export const Introduction = () => (
  <div className="two-columns">
    <p>
      California is one of the most beautiful parts of the country and our
      economy is booming. A lot of people want to experience our state's
      opportunities but can't because of a shortage of places to live.
    </p>
    <ul>
      <li>
        California added 334 thousand residents in 2017, while only 88 thousand
        residences were built in that same period. That's roughly{" "}
        <ExternalLink link="www.dof.ca.gov/Forecasting/Demographics/Estimates/E-5/">
          one home for every four people
        </ExternalLink>{" "}
        who've come to the state, and this pattern has held for decades.
      </li>
      <li>
        54% of renter households and 39% of mortgage holders paid over{" "}
        <ExternalLink link="calbudgetcenter.org/resources/californians-parts-state-pay-can-afford-housing">
          30% of their income toward housing
        </ExternalLink>{" "}
        in 2015, and housing costs exceeded 50% of their income for half of each
        group.
      </li>
    </ul>
    <p>
      Senate Bill 827 (<b>
        <ExternalLink link="leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=201720180SB827">
          SB 827
        </ExternalLink>
      </b>) could change this! SB 827 would change zoning around transit to
      allow for mid-rise housing.
    </p>
    <p>At a high level, the measure would:</p>
    <ul>
      <li>Allow more houses to be built near transit stations,</li>
      <li>Block city parking minimums that waste valuable space, and</li>
      <li>
        Set minimum height limits from 45 to 85 feet in places near transit.
      </li>
    </ul>
    <p>
      This an seem scary at first ("<ExternalLink link="padailypost.com/2018/02/18/housing-bill-result-85-foot-tall-buildings-el-camino">
        Housing bill could result in 85-foot tall buildings on El Camino
      </ExternalLink>"). I totally understand where these fears come from — I
      grew up around there, and it's frightening to think about how the places I
      love might change.
    </p>
    <p>
      Digging into the details convinced me how that SB 827 really is a force
      for good. SB 827 makes neighborhoods more vibrant, equitable, and
      eco-friendly! I walked away inspired by the opportunity this bill brings.
      I hope these rendering and perspectives below inspire you.
    </p>
  </div>
);
