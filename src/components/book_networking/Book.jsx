import React from 'react'
import './Book.css'

export default class Book extends React.Component {
  constructor() {
    super()

    this.state = {
      bookName: '',
      editId: null, //要修改书的id
      bookList: []
    }
  }

  handleKeyPress = e => {
    if (e.nativeEvent.keyCode === 13) {
      this.addBook()
    }
  }

  addBook = () => {
    if (this.state.bookName.trim().length === 0) return

    if (this.state.editId) {
      fetch(`http://127.0.0.1:3000/book/${this.state.editId}`, {
        method: 'PUT',
        //application/x-www-form-urlencoded
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'name=' + this.state.bookName
      })
        .then(data => data.json())
        .then(res => {
          if (res.status === 0) {
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
          }
        })
    } else {
      //新增
      fetch('http://127.0.0.1:3000/book', {
        // JSON格式
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({ name: this.state.bookName })

        /**
         * application/x-www-form-urlencoded
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'name=' + this.state.bookName
         */
      })
        .then(data => data.json())
        .then(res => {
          if (res.status === 0) {
            const newArr = [
              ...this.state.bookList,
              { id: res.insertId, name: this.state.bookName }
            ]

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
        })
    }
  }

  deleteBook = (id, event) => {
    event.preventDefault()

    if (!confirm('确定删除吗?')) return

    fetch(`http://127.0.0.1:3000/book/${id}`, {
      method: 'DELETE'
    })
      .then(data => data.json())
      .then(res => {
        if (res.status === 0) {
          const newArr = this.state.bookList
          const index = newArr.findIndex(item => item.id === id)
          newArr.splice(index, 1)

          this.setState({
            bookList: newArr
          })
        }
      })
  }

  editBook = (id, event) => {
    event.preventDefault()

    // 要修改的id
    this.state.editId = id
    fetch(`http://127.0.0.1:3000/book/${id}`)
      .then(data => data.json())
      .then(res => {
        // 给设置值
        this.setState({
          bookName: res.name
        })
      })
  }

  componentDidMount() {
    fetch('http://127.0.0.1:3000/book')
      .then(data => data.json())
      .then(res => {
        this.setState({
          bookList: res
        })
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
