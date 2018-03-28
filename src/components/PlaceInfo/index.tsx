import * as React from 'react'

import './index.css'

interface IProps {
  description: string
  src: string
  address: string[]
}

export const PlaceInfo = (props: IProps) => (
  <div className="place-info">
    <iframe className="place-info--map" src={props.src} allowFullScreen />
    <div className="place-info--description">
      <p>{props.description}</p>
      <p>{props.description}</p>
    </div>
  </div>
)
