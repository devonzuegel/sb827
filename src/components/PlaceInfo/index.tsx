import * as React from 'react'

import './index.css'

interface IProps {
  description: string[]
  src: string
  address: string[]
  before: string
  after: string
  emphasis: string
}

export const PlaceInfo = (props: IProps) => (
  <div className="place-info">
    <div className="place-info--left">
      <iframe className="place-info--map" src={props.src} allowFullScreen />
      <div className="place-info--downloads">
        <span className="place-info--label">Full-size downloads:</span>
        <a href={props.before} download>
          before
        </a>
        <span className="place-info--separator">•</span>
        <a href={props.after} download>
          after
        </a>
      </div>
    </div>
    <div className="place-info--description">
      <h2>{props.emphasis}</h2>
      {props.description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
    </div>
  </div>
)
