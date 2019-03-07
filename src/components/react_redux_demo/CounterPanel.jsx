import React from 'react'

import Counter from './Counter'
import Summary from './Summary'

export default class CounterPanel extends React.Component {
  render() {
    return (
      <div>
        react-redux demo <br />
        <Counter title="First" />
        <Counter title="Second" />
        <Counter title="Third" />
        <Summary />
      </div>
    )
  }
}
