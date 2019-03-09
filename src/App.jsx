import React, { Component } from 'react'
import ControlledComponent from './components/ControlledComponent.jsx'
import RefsAndDom from '@/components/RefsAndDom'
import Menu from '@/components/DotNotation'
import DotNotation from '@/components/DotNotation'
import WebSocketTest from '@/components/WebSocketTest'
// import CounterPanel from './components/redux_demo/CounterPanel'
import store from './react_redux/store'
import {Provider} from 'react-redux'
import CounterPanel from './components/react_redux_demo/CounterPanel'
import Book from './components/book/Book'
import GrandPa from './components/grandpa/GrandPa'
import Parent from './components/brother/Parent'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 我是根组件 */}
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
        {/* <WebSocketTest /> */}
        {/* Redux Demo */}
        {/* <CounterPanel /> */}
        {/* React-Redux Demo */}
        {/* <Provider store={store}>
          <CounterPanel />
        </Provider> */}
        <Book />
        {/* <GrandPa /> */}
        {/* <Parent/> */}
      </div>
    )
  }
}
