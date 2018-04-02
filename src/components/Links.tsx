import * as React from 'react'

export const ExternalLink = (props: {children: string; link: string}) => (
  <a target="_blank" href={`http://${props.link}`}>
    {props.children}
  </a>
)

export const Credit = (props: {phrase: string; children: string; link: string}) => (
  <span>
    {props.phrase} <ExternalLink {...props} />
  </span>
)
