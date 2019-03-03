import React, { Component } from 'react'

export default class RefsAndDom extends Component {
  constructor() {
    super()

    this.state = {
      imgPath: ''
    }

    // 创建一个元素（JSX元素，而非原生Dom）引用
    this.myinputRef2 = React.createRef()

    this.fileInputRef = React.createRef()
  }

  componentDidMount() {
    //之前的写法
    // this.refs.myinputRef.focus();

    // 现在的写法
    // this.myinputRef2.current 获取到真实dom
    this.myinputRef2.current.focus()
  }

  // 文件上传处理
  handleSubmit = () => {
    // 获取要上传的文件
    const file = this.fileInputRef.current.files[0]
    if (file) {
      // 使用xhr2进行异步文件上传操作
      var xhr = new XMLHttpRequest()
      // 设置请求方式及路径
      xhr.open('post', 'http://127.0.0.1:8888/uploadFile')
      // 设置请求体
      var formData = new FormData()
      formData.append('file', file)
      // 发送
      xhr.send(formData)
      // 响应
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const res = xhr.responseText
          const obj = JSON.parse(res)

          // 设置图片
          this.setState({
            imgPath: obj.path
          })
        }
      }
    }
  }

  render() {
    focus = () => {
      return (
        <div>
          {/* 之前的写法 */}
          {/* 用户名：
          <input type="text" ref="myinputRef" /> */}
          {/* 现在的写法 */}
          用户名2：
          <input type="text" ref={this.myinputRef2} />
        </div>
      )
    }

    const imgStyle = {
      width: '300px',
      height: '300px'
    }

    return (
      <div>
        <div>refs-非受控组件-获取焦点</div>
        <div>{focus()}</div>
        <br />
        <br />
        <hr />
        <div>refs-非受控组件-文件上传</div>
        <div>
          <input type="file" ref={this.fileInputRef} />
          <br />
          <button onClick={this.handleSubmit}>上传</button>
        </div>
        <br />
        {this.state.imgPath && (
          <img style={imgStyle} src={this.state.imgPath} />
        )}
      </div>
    )
  }
}
