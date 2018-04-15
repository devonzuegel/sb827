import * as React from 'react'

import {Credit, ExternalLink} from '../components/Links'

export const ThankYou = () => (
  <div className="footer">
    <Credit
      phrase="Made by"
      children="Devon Zuegel"
      link="twitter.com/devonzuegel"
    />
    <span className="separator">•</span>
    Renderings by{' '}
    <ExternalLink
      children="Flora Bao"
      link="www.aiasf.org/members/?id=39131857"
    />{' '}
    &amp; <ExternalLink children="UVIZ" link="www.uvizstudio.com" />
    <span className="separator">•</span>
    Thanks to <ExternalLink
      children="Nat Friedman"
      link="twitter.com/natfriedman"
    />, <ExternalLink children="Louis Mirante" link="twitter.com/louismirante" />,
    &amp; <ExternalLink children="Hunter Owens" link="twitter.com/hunter_owens" />
  </div>
)

export const AboutProject = () => (
  <div className="section">
    <h2>About this project</h2>
    <p>
      This site was originally published on April 2, 2018. You can find the source
      and revision history{' '}
      <ExternalLink link="github.com/devonzuegel/sb827">here</ExternalLink>.
    </p>
  </div>
)
