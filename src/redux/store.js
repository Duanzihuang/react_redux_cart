import {createStore} from 'redux'

import reducer from './reducer'

const defaultValues = {
    First:2,
    Second:6,
    Third:3
}

const store = createStore(reducer,defaultValues)

export default store
