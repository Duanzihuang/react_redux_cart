const express = require('express')
const querystring = require('querystring')

// 创建app
const app = express()

// 登录
app.use((req, res, next) => {
  if (req.method === 'POST') {
    let body = ''

    req.on('data', chunk => {
      body += chunk
    })

    req.on('end', () => {
      req.body = querystring.parse(body)
      next()
    })
  } else {
    next()
  }
})

app.post('/login', (req, res) => {
  const { username, password } = req.body
  console.log(req.body)

  const result = {
    status: 0,
    message: '登录成功'
  }

  if (username === 'lily' && password === '123') {
    res.json(result)

    return
  }

  if (username === 'tom' && password === '123') {
    res.json(result)

    return
  }

  if (username === 'jerry' && password === '456') {
    res.json(result)

    return
  }

  result.status = 1
  result.message = '用户名或密码错误'
  res.json(result)
})

const WebSocket = require('ws')
const wss = new WebSocket.Server({
  port: 8081
})

// 连接到服务器了
/**
 * 参数1：监听的事件
 * 参数2：浏览器连接到服务器，服务器会自动创建一个与浏览器保持连接的对象
 * 并且把这个对象作为参数传递
 */
wss.on('connection', function connection(client) {
//   console.log(client)
  console.log('连接成功')

  console.log("连接的客户端个数：",wss.clients.size)

  client.on('open',()=>{
      console.log('server open')
  })

  // 连接事件
  client.on('message', function incoming(message) {
    console.log('接收到服务器返回的数据 received: %s', message)
    if (message === '你好'){
        client.send("你也好")
    } else if (message ==="OK"){
        client.send("OK")
    } else {
        client.send("你给我发的啥,我看不懂啊...")
    }
  })

  // 断开事件
  client.on('close',()=>{
      console.log("连接关闭...")
  })

  // 监听异常
  client.on('error',err=>{
      console.log(err)
  })

  // 发送消息给客户端
  client.send("...欢迎访问...")
})

app.listen(8080, () => {
  console.log('http-server stark ok!')
})
