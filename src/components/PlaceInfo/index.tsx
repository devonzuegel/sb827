import * as React from 'react'

import './index.css'

interface IProps {
  description: string
  src: string
  address: string[]
  before: string
  after: string
}

export const PlaceInfo = (props: IProps) => (
  <div className="place-info">
    <div className="place-info--left">
      <iframe className="place-info--map" src={props.src} allowFullScreen />
      <div>
        <span style={{paddingRight: '6px'}}>Downloads:</span>
        <a href={props.before} download>
          before
        </a>
        <span> • </span>
        <a href={props.after} download>
          after
        </a>
      </div>
    </div>
    <div className="place-info--description">
      <p>{props.description}</p>
      <p>{props.description}</p>
    </div>
  </div>
)
