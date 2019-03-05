# react_redux_cart
React + Redux 做的购物车案例

### React表单中受控组件与非受控组件

> 受控组件与非受控组件的区别

```
# 受控组件
  受控组件的状态由React组件控制
	
# 非受控组件
  非受控组件的状态由DOM控制
```

> 非受控组件Ref使用的两种途径

```
# 通过refs获取dom
  1、给表单元素添加ref属性
  2、通过 this.refs.xxx 拿到dom元素
  
# React.createRef()方式
  参考:https://react.docschina.org/docs/refs-and-the-dom.html
```

### WebSocket

> 基本概念  http://www.runoob.com/html/html5-websocket.html

```
WebSocket 是 HTML5 开始提供的一种在单个 TCP 连接上进行全双工通讯的协议。

WebSocket 使得客户端和服务器之间的数据交换变得更加简单，允许服务端主动向客户端推送数据。在 WebSocket API 中，浏览器和服务器只需要完成一次握手，两者之间就直接可以创建持久性的连接，并进行双向数据传输。

在 WebSocket API 中，浏览器和服务器只需要做一个握手的动作，然后，浏览器和服务器之间就形成了一条快速通道。两者之间就直接可以数据互相传送。

现在，很多网站为了实现推送技术，所用的技术都是 Ajax 轮询。轮询是在特定的的时间间隔（如每1秒），由浏览器对服务器发出HTTP请求，然后由服务器返回最新的数据给客户端的浏览器。这种传统的模式带来很明显的缺点，即浏览器需要不断的向服务器发出请求，然而HTTP请求可能包含较长的头部，其中真正有效的数据可能只是很小的一部分，显然这样会浪费很多的带宽等资源。

HTML5 定义的 WebSocket 协议，能更好的节省服务器资源和带宽，并且能够更实时地进行通讯。
```

> WebSocket在线测试网址
```
http://blue-zero.com/websocket/
```

> Node端实现

```
https://github.com/websockets/ws
```

