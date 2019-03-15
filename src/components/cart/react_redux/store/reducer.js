import { GET_ALL, ADD_CART, DELETE_CART, UPDATE_CART } from './actionTypes'

// 去本地取数据
const initState = JSON.parse(localStorage.getItem('redux_cart') || '[]')

export default (state = initState, action) => {
  switch (action.type) {
    case GET_ALL:
      return state

    case ADD_CART:
      const addArr = JSON.parse(JSON.stringify(state))
      const addGoods = addArr.find(goods => goods.id === action.goods.id)
      if (addGoods) {
        addGoods.num += action.goods.num
      } else {
        addArr.push(action.goods)
      }
      return addArr

    case UPDATE_CART:
      const updateArr = JSON.parse(JSON.stringify(state))
      const updateGoods = updateArr.find(item => item.id === action.goods.id)
      updateGoods.num = action.goods.num
      return updateArr

    case DELETE_CART:
      // 找到索引
      const index = state.findIndex(item => item.id === action.goods.id)
      const deleteArr = JSON.parse(JSON.stringify(state))
      deleteArr.splice(index, 1)
      return deleteArr

    default:
      return JSON.parse(JSON.stringify(state))
  }
}
