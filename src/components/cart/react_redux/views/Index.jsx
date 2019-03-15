import React, { Component } from 'react'
import './Index.css'

import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import 'element-theme-default'

// 导入组件
import GoodsList from './GoodsList'
import Cart from './Cart'
import NotFound from './NotFound'

import { connect } from 'react-redux'

class Index extends Component {
  constructor() {
    super()
  }

  componentWillMount() {
    window.onbeforeunload = () => {
      // 把数据保存到本地
      localStorage.setItem('redux_cart', JSON.stringify(this.props.goodsList))
    }
  }

  render() {
    const { totalCount } = this.props
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

const mapStateToProps = state => {
  // 获取总数
  const getTotalCount = () => {
    let total = 0
    const arr = state
    arr.forEach(goods => {
      total += goods.num
    })

    return total
  }

  return {
    goodsList: state,
    totalCount: getTotalCount()
  }
}

export default connect(mapStateToProps)(Index)
