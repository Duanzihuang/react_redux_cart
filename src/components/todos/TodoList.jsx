import React,{Component} from 'react'
import { connect } from 'react-redux'

class TodoList extends Component{
    render(){
        const todos = this.props.todos

        return <div className="todo-list">
            <ul>
            {
                todos.map((item,index)=>{
                    return <li className={item.isComplete?'todo-item-complete':''} key={index}>
                        <label>
                            <input type="checkbox"/>&nbsp;{item.name}
                        </label>
                    </li>
                })
            }
            </ul>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        todos:state
    }
}

export default connect(mapStateToProps,null)(TodoList)