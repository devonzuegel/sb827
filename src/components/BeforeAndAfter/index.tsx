import * as React from 'react'

import './index.css'

interface IProps {
  before: string
  after: string
  percent?: number
}

export class BeforeAndAfter extends React.Component<IProps, {after: number}> {
  state = {after: this.props.percent || 50}

  public render() {
    return (
      <div id="before-and-after">
        <figure style={{backgroundImage: `url(${this.props.before})`}}>
          <div
            id="after"
            style={{
              width: `${this.state.after}%`,
              backgroundImage: `url(${this.props.after})`,
            }}
          />
        </figure>
        <input
          type="range"
          min="0"
          max="100"
          value={this.state.after}
          id="slider"
          onChange={e => {
            this.setState({after: Number(e.target.value)})
          }}
        />
      </div>
    )
  }
}
