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

### Redux & React-Redux

> redux 与 react-redux的区别

```
1、react-redux 提供了容器组件与渲染组件的概念

2、react-redux 简化了数据的获取与更改操作
```

> redux使用步骤

```
1、导入 createStore 和 reducer 创建 store
	import {createStore} from 'redux'
	import reducer from './reducer'
	const store = createStore(reducer,defaultValues)
	
2、在组件中使用store 获取 store 的内容以及监听store的变化然后更新数据到本地state中
	store.getState()
	store.subscribe(this.onChange)
	
3、当组件触发了某个行为，调用store.dispatch方法把结果传递给reducer去处理
	store.dispatch({
      type: 'INCREMENT',
      title: this.props.title
    })
    export default (state, action) => {
        ...
    })
```

> react-redux使用步骤

```
1、导入 createStore 和 reducer 创建 store
	import {createStore} from 'redux'
	import reducer from './reducer'
	const store = createStore(reducer,defaultValues)
	
2、导入 Provider
	import {Provider} from 'react-redux'

3、在所有组件外层包裹Provider并且传递store
	<Provider store={store}>
		<其它子组件 />
	</Provider>
	
4、在子组件中导入 connect【作用：产生一个容器组件，从而包装一个傻瓜组件】
	import {connect} from 'react-redux'
	
5、mapStateToProps
	把 store 中的数据 同步到组件的props中
	
6、mapDispatchToProps
	把组件中的行为/事件转化为分发action的动作
```

