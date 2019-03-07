import {createStore} from 'redux'
import reducer from './reducer'

// 默认值
const defaultValues = {
    First:1,
    Second:2,
    Third:3
}

// 传入reducer及默认值(可选) 创建store
const store = createStore(reducer,defaultValues)

export default store