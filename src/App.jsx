import React, { Component } from 'react'
import ControlledComponent from './components/ControlledComponent.jsx'
import RefsAndDom from '@/components/RefsAndDom'
import Menu from '@/components/DotNotation'
import DotNotation from '@/components/DotNotation'
import WebSocketTest from '@/components/WebSocketTest'

export default class App extends Component {
  render() {
    return (
      <div>
        我是根组件
        <br />
        <br />
        {/* 非受控组件 */}
        {/* <RefsAndDom /> */}
        {/* 受控组件之Checkbox 和 Radio */}
        {/* <ControlledComponent /> */}
        {/* 点标记语法 
          https://reactjs.org/docs/jsx-in-depth.html#using-dot-notation-for-jsx-type
        */}
        {/* <DotNotation /> */}
        {/* <Menu>
          <Menu.Item />
        </Menu> */}
        {/* 即时通讯 */}
        <WebSocketTest />
      </div>
    )
  }
}
