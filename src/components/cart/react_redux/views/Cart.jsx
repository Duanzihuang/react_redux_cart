import React, { Component } from 'react'

import { Button, Table, InputNumber } from 'element-react'
import { updateCart, deleteCart } from '../store/actionCreator'

import { connect } from 'react-redux'

class Cart extends Component {
  constructor() {
    super()

    this.state = {
      columns: [
        {
          label: '名字',
          prop: 'name',
          width: 180
        },
        {
          label: '图片',
          render: row => {
            return (
              <img style={{ width: 100, height: 100 }} src={row.url} alt="" />
            )
          },
          width: 180
        },
        {
          label: '数量',
          render: row => {
            return (
              <InputNumber
                size="small"
                defaultValue={row.num}
                onChange={this.changeNum.bind(this, row)}
                min="1"
              />
            )
          }
        },
        {
          label: '单价',
          prop: 'price'
        },
        {
          label: '总价',
          render: row => {
            return <span>{row.num * row.price}</span>
          }
        },
        {
          label: '操作',
          render: row => {
            return (
              <Button onClick={this.deleteGoods.bind(this, row)} type="danger">
                删除
              </Button>
            )
          }
        }
      ]
    }
  }

  // 更改商品数量
  changeNum = (goods, num) => {
    const newGoods = JSON.parse(JSON.stringify(goods))
    newGoods.num = num

    this.props.updateGoods(newGoods)
  }

  // 删除商品
  deleteGoods(goods) {
    this.props.deleteGoods(goods)
  }

  render() {
    return (
      <div>
        <Table
          style={{ width: '100%' }}
          columns={this.state.columns}
          data={this.props.goodsList}
        />
        <div style={{ marginLeft: 5 }}>
          <p>总价:{this.props.totalPrice}</p>
          <Button type="success">总价</Button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  // 计算总价
  const calcTotalPrice = () => {
    let totalPrice = 0
    state.forEach(goods => {
      totalPrice += goods.price * goods.num
    })

    return totalPrice
  }

  return {
    goodsList: state,
    totalPrice: calcTotalPrice()
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateGoods(goods) {
      dispatch(updateCart(goods))
    },
    deleteGoods(goods) {
      dispatch(deleteCart(goods))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)
