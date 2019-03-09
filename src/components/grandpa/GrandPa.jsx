import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Parent extends Component {
  render() {
    return (
      <div>
        <div>Parent</div>
        <GrandSon />
      </div>
    )
  }
}

class GrandSon extends Component {
  static contextTypes = {
    myvalue: PropTypes.string
  }

  render() {
    const { myvalue } = this.context
    return (
      <div>
        <div>GrandSon---{myvalue}</div>
      </div>
    )
  }
}

export default class GrandPa extends Component {
  constructor() {
    super()

    this.state = {
      value: '你是一个好人'
    }
  }

  static childContextTypes = {
    myvalue: PropTypes.string
  }

  getChildContext() {
    return {
      myvalue: this.state.value
    }
  }

  handleChange = () => {
    this.setState({
      value: 'you are a good man!'
    })
  }

  render() {
    return (
      <div>
        <div>
          GrandPa <button onClick={this.handleChange}>更改GrandPa的值</button>
        </div>
        <Parent />
      </div>
    )
  }
}
