import React, { Component } from 'react'

export default class WebSocketTest extends Component {
  constructor() {
    super()

    this.state = {
      // 连接地址
      connectURL: 'ws://127.0.0.1:8081',
      // 发送的消息
      content: '',
      // 是否连接成功
      isConnectSuccess: false,
      // 消息列表
      messageList: [],
      // 保存起来
      ws: null
    }
  }

  changeValue = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  /**
   * 连接到服务器
   */
  connect = () => {
    const ws = new WebSocket(this.state.connectURL)

    this.state.ws = ws

    ws.onopen = () => {
      // Web Socket 已连接上，使用 send() 方法发送数据
      this.setState({
        isConnectSuccess: true
      })
    }

    ws.onmessage = evt => {
      const messageList = [...this.state.messageList, evt.data]

      this.setState({
        messageList
      })
    }

    ws.onclose = function() {
      // 关闭 websocket
      console.log('连接关闭了')
    }
  }

  sendMsg = () => {
    this.state.ws.send(this.state.content)

    // 加入到messageList中
    const messageList = [...this.state.messageList, this.state.content]
    this.setState({
      messageList,
      content: ''
    })
  }

  render() {
    const { connectURL, messageList, content, isConnectSuccess } = this.state
    return (
      <div>
        消息列表:
        <br />
        <ul>
          {messageList.map((item, index) => {
            return <li key={index}>{item}</li>
          })}
        </ul>
        <br />
        <input
          name="connectURL"
          type="text"
          onChange={this.changeValue}
          value={connectURL}
        />
        <button onClick={this.connect}>连接到服务器</button>&nbsp;&nbsp;
        {isConnectSuccess && <span style={{ color: 'green' }}>连接成功</span>}
        <br />
        <br />
        <textarea
          name="content"
          value={content}
          onChange={this.changeValue}
          id=""
          cols="30"
          rows="8"
        />
        <br />
        <button onClick={this.sendMsg}>发送消息</button>
      </div>
    )
  }
}
