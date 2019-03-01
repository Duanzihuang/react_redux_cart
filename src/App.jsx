import React,{Component} from 'react'
import ControlledComponent from './components/ControlledComponent.jsx'

export default class App extends Component{
  render(){
    return <div>
      我是根组件<br/>
      {/* 受控组件之Checkbox 和 Radio */}
      <ControlledComponent />
    </div>
  }
}
