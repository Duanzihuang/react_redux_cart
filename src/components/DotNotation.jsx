import React, { Component } from 'react'

/**
export default class Menu extends Component {
  static Item = () => {
    return <span class="test">子组件</span>
  }
  render() {
    const { children } = this.props
    return (
      <div>
        <ul>
          <li>父组件</li>
          <li>{children}</li>
        </ul>
      </div>
    )
  }
}

 */

const MyDiaLog = props => {
  const layer = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)',
    zIndex: 1
  }

  const dialog = {
    position: 'absolute',
    backgroundColor: 'white',
    top: 200,
    width: 500,
    height: 300,
    left: '50%',
    marginLeft: -250,
    zIndex: 2
  }

  const title = {
    backgroundColor: 'SkyBlue',
    height: 30
  }

  const content = {}

  return (
    <div>
      <div style={dialog}>
        <div style={title}>{props.title}</div>
        <div style={content}>{props.children}</div>
      </div>
      <div style={layer} />
    </div>
  )
}

export default class DotNotation extends Component {
  render() {
    return (
      <div>
        <MyDiaLog title="新增用户">
          用户名:
          <input type="text" />
          <br />
          密码:
          <input type="password" />
          <br />
          <button>新增</button>
        </MyDiaLog>
      </div>
    )
  }
}
