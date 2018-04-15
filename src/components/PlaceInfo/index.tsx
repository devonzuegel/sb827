import * as React from 'react'

import './index.css'

type TImpact = [string, string]

interface IProps {
  description: React.ReactNode[]
  src: string
  address: string[]
  before: string
  after: string
  emphasis: string
  impacts: TImpact[]
}

const Map = (props: {src: string}) => (
  <iframe className="place-info--map" src={props.src} allowFullScreen />
)

const Downloads = (props: {before: string; after: string}) => (
  <div className="place-info--downloads">
    <b>Downloads:</b>
    <a href={props.before} download>
      before
    </a>
    <span className="place-info--separator">•</span>
    <a href={props.after} download>
      after
    </a>
  </div>
)

const Impact = (props: {impacts: TImpact[]}) => {
  return (
    <div>
      {props.impacts.map(([name, value], k) => (
        <div key={k}>
          <b>{name}:</b> {value}
        </div>
      ))}
    </div>
  )
}

export const PlaceInfo = (props: IProps) => (
  <div className="place-info">
    <div className="place-info--left">
      <Map {...props} />
      <Impact {...props} />
      <Downloads {...props} />
    </div>
    <div className="place-info--description">
      <h2>{props.emphasis}</h2>
      {props.description.map((paragraph, i) => <p key={i}>{paragraph}</p>)}
    </div>
  </div>
)
