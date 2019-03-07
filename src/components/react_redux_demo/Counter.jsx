import React from 'react'
import './Counter.css'

import { connect } from 'react-redux'

class Counter extends React.Component {
  render() {
    const { value, add, substrict } = this.props
    return (
      <div>
        <div onClick={substrict} className="left">
          -
        </div>
        <div className="middle">{value}</div>
        <div onClick={add} className="right">
          +
        </div>
      </div>
    )
  }
}

// 把store的值同步到props中
const mapStateToProps = (state, props) => {
  return {
    value: state[props.title]
  }
}

// 把组件的事件行为，同步到props中
const mapDispatchToProps = (dispatch, props) => {
  return {
    add: () => {
      dispatch({
        type: 'ADD',
        title: props.title
      })
    },
    substrict: () => {
      dispatch({
        type: 'SUBSTRICT',
        title: props.title
      })
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
