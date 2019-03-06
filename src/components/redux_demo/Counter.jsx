import React from 'react'
import './Counter.css'

import store from '../../redux/store'

export default class Counter extends React.Component {
  constructor(props) {
    super(props)

    this.state = this.getValue()
  }

  getValue = () => {
    // console.log(store.getState())
    return {
      value: store.getState()[this.props.title]
    }
  }

  onChange = () => {
    this.setState({
      value: store.getState()[this.props.title]
    })
  }

  componentWillMount() {
    store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    store.unsubscride(this.onChange)
  }

  add = () => {
    store.dispatch({
      type: 'INCREMENT',
      title: this.props.title
    })
  }

  substrict = () => {
    store.dispatch({
      type: 'DECREMENT',
      title: this.props.title
    })
  }

  render() {
    const { value } = this.state
    return (
      <div>
        <div onClick={this.substrict} className="left">
          -
        </div>
        <div className="middle">{value}</div>
        <div onClick={this.add} className="right">
          +
        </div>
      </div>
    )
  }
}
