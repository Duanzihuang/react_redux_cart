import {GET_ALL,ADD_TODO} from './actionTypes'
export default (state = [],action) => {
    console.log(action)
    switch (action.type) {
        case GET_ALL:
            return state

        case ADD_TODO:
            return [...state,action.todo]
    
        default:
            return state
    }
}