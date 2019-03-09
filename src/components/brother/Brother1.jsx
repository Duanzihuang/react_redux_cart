import React, { Component } from 'react'
import { bus } from './bus'

export default class Brother1 extends Component {
  sendValueToBrother = () => {
    bus.emit('dataChange', { name: '小明', age: 30 })
  }

  render() {
    return (
      <div>
        我是Brother1---
        <button onClick={this.sendValueToBrother}>传值给Brother2</button>
      </div>
    )
  }
}
