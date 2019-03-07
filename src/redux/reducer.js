export default (state, action) => {
  //   console.log(state)
  // console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      /**
      state[action.title] += 1

      return state
       */
      // 展开运算符，先把state中的所有属性展开，然后用后面的属性值，覆盖展开的属性值
      return { ...state, [action.title]: state[action.title] + 1 }
    case 'DECREMENT':
      if (state[action.title] > 1){
        state[action.title] -= 1
      }
      return state

    default:
      return state
  }
}
