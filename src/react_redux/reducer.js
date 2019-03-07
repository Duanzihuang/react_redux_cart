export default (state, action) => {
  if (action.type === 'ADD') {
    return { ...state, [action.title]: state[action.title] + 1 }
  } else if (action.type === 'SUBSTRICT') {
      if (state[action.title] <= 1){
        return state
      } else {
        return { ...state, [action.title]: state[action.title] - 1 }
      }
  } else {
    return state
  }
}
