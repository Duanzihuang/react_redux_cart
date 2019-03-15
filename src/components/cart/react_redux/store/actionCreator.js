import {ADD_CART,UPDATE_CART,DELETE_CART} from './actionTypes'

export const addToCart = goods => {
    return {
        type:ADD_CART,
        goods:goods
    }
}

export const updateCart = goods => {
    return {
        type:UPDATE_CART,
        goods:goods
    }
}

export const deleteCart = goods => {
    return {
        type:DELETE_CART,
        goods:goods
    }
}