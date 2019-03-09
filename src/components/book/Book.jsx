import React from 'react'
import './Book.css'

export default class Book extends React.Component {
  constructor() {
    super()

    this.state = {
      bookName: '',
      editId: null, //要修改书的id
      bookList: [
        { id: 1, name: '平凡的世界' },
        { id: 2, name: '红楼梦' },
        { id: 3, name: '三国演义' },
        { id: 4, name: 'JS高级入门' }
      ]
    }
  }

  _getMaxId() {
    const ids = this.state.bookList.map(item => item.id)

    // 取出最大的id
    // const maxId = Math.max.apply(null,ids)
    const maxId = Math.max(...ids)

    return maxId + 1
  }

  handleKeyPress = e => {
    if (e.nativeEvent.keyCode === 13) {
      this.addBook()
    }
  }

  addBook = () => {
    if (this.state.bookName.trim().length === 0) return

    if (this.state.editId) {
      // 修改
      const book = this.state.bookList.find(
        item => item.id === this.state.editId
      )
      book.name = this.state.bookName

      this.setState(
        {
          bookList: this.state.bookList,
          bookName: ''
        },
        () => {
          this.state.editId = null
        }
      )
    } else {
      //新增
      const id = this._getMaxId()

      const newArr = [...this.state.bookList, { id, name: this.state.bookName }]

      this.setState(
        {
          bookList: newArr,
          bookName: ''
        },
        () => {
          this.state.editId = null
        }
      )
    }
  }

  deleteBook = (id, event) => {
    event.preventDefault()

    // const newArr = this.state.bookList.filter(item=>item.id !== id)

    const newArr = this.state.bookList
    const index = newArr.findIndex(item => item.id === id)
    newArr.splice(index, 1)

    this.setState({
      bookList: newArr
    })
  }

  editBook = (id, event) => {
    event.preventDefault()

    const book = this.state.bookList.find(item => item.id === id)

    this.state.editId = id

    // 给设置值
    this.setState({
      bookName: book.name
    })
  }

  render() {
    const listContent = this.state.bookList.map(item => {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>
            <a href="" onClick={this.deleteBook.bind(this, item.id)}>
              删除
            </a>
            <span>|</span>
            <a href="" onClick={this.editBook.bind(this, item.id)}>
              编辑
            </a>
          </td>
        </tr>
      )
    })

    return (
      <div>
        <div>
          <span>书名:</span>
          <input
            value={this.state.bookName}
            onKeyPress={this.handleKeyPress}
            onChange={e => {
              this.setState({ bookName: e.target.value })
            }}
            type="text"
          />
          <button onClick={this.addBook}>新增 / 修改</button>
        </div>
        <br />
        <div>
          <table>
            <thead>
              <tr>
                <th>编号</th>
                <th>书名</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>{listContent}</tbody>
          </table>
        </div>
      </div>
    )
  }
}
