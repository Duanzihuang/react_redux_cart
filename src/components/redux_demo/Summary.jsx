import React from 'react'
import store from '../../redux/store'

export default class Summary extends React.Component {
  constructor() {
    super()

    this.state = this.getValues()
  }

  getValues = () => {
    const values = store.getState()

    let sum = 0
    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        sum += values[key]
      }
    }

    return { sum }
  }

  onChange = () => {
    this.setState(this.getValues())
  }

  componentWillMount() {
    store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    store.unsubscribe(this.onChange)
  }

  render() {
    return <div>总计:{this.state.sum}</div>
  }
}
