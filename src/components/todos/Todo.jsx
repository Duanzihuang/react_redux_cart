import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import './Todo.css'

import AddTodo from './AddTodo'
import TodoList from './TodoList'

export default class Todo extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="todo-container">
          <AddTodo />
          <TodoList/>
          <div className="footer">
            <a href="#" className="all">
              全部
            </a>
            <a href="#" className="complete">
              完成
            </a>
            <a href="#" className="uncomplete">
              未完成
            </a>
          </div>
        </div>
      </Provider>
    )
  }
}
