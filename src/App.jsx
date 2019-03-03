import React, { Component } from 'react'
import ControlledComponent from './components/ControlledComponent.jsx'
import RefsAndDom from '@/components/RefsAndDom'

export default class App extends Component {
  render() {
    return (
      <div>
        我是根组件
        <br />
        <br />
        {/* 非受控组件 */}
        <RefsAndDom />
        {/* 受控组件之Checkbox 和 Radio */}
        {/* <ControlledComponent /> */}
      </div>
    )
  }
}
