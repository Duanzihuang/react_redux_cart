import React, { Component } from 'react'
import Brother1 from './Brother1'
import Brother2 from './Brother2'

export default class Parent extends Component {
  render() {
    return (
      <div>
        <Brother1 />
        <Brother2 />
      </div>
    )
  }
}
