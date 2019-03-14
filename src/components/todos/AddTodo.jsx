import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ADD_TODO } from './store/actionTypes'

class AddTodo extends Component {
  constructor() {
    super()

    this.state = {
      name: ''
    }
  }

  render() {
    const { addTodo } = this.props
    return (
      <div>
        <input
          value={this.state.name}
          onChange={() => {
            this.setState({ name: event.target.value })
          }}
          type="text"
        />
        &nbsp;<button onClick={this.addTodo}>添加</button>
      </div>
    )
  }

  addTodo = () => {
    this.props.addTodo(this.state.name)

    this.setState({
      name: ''
    })
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo(name) {
      if (name.trim().length === 0) return
      dispatch({
        type: ADD_TODO,
        todo: {
          name: name,
          isComplete: false
        }
      })
    }
  }
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodo)
