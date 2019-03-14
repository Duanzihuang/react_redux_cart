import React, { Component } from 'react'
import './Index.css'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import 'element-theme-default'

import store from '../store/'

// 导入组件
import GoodsList from './GoodsList'
import Cart from './Cart'
import NotFound from './NotFound'

export default class Index extends Component {
  constructor() {
    super()

    this.state = {
      totalCount: 0
    }
  }

  componentWillMount() {
    // 初次加载的时候，去取总数量
    this.setState({
      totalCount: this.getTotalCount()
    })

    store.subscribe(() => {
      this.setState({
        totalCount: this.getTotalCount()
      })
    })

    window.onbeforeunload = function() {
      // 把数据保存到本地
      localStorage.setItem('redux_cart', JSON.stringify(store.getState()))
    }
  }

  getTotalCount() {
    let total = 0
    const arr = store.getState()
    arr.forEach(goods => {
      total += goods.num
    })

    return total
  }

  render() {
    const { totalCount } = this.state
    return (
      <Router>
        <div>
          <h2 className="title">
            黑马买买买-商城
            <p>
              <Link to="/">商品列表</Link>
              <Link to="/cart">
                购物车{totalCount > 0 && <span>（{totalCount}）</span>}
              </Link>
            </p>
          </h2>
          <Switch>
            <Route path="/" exact component={GoodsList} />
            <Route path="/cart" component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    )
  }
}
