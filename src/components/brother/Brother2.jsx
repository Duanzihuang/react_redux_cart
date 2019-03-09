import React, { Component } from 'react'
import { bus } from './bus'

export default class Brother2 extends Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount() {
    bus.on('dataChange', data => {
      // console.log(data)
      this.setState({
        name: data.name,
        age: data.age
      })
    })
  }

  render() {
    const { name, age } = this.state
    return (
      <div>
        Brother2---
        {name && (
          <span>
            name is {name} age is {age}
          </span>
        )}
      </div>
    )
  }
}
