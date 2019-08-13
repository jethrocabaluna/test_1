import { useReducer } from 'react'
import { ADD_PRODUCT, REMOVE_PRODUCT, INC_PRODUCT, DEC_PRODUCT } from './actions'

function productReducer(state, action) {
    switch(action.type) {
        case ADD_PRODUCT:
            const newProduct =  Object.assign({}, action.product, {num: 1})
            return [
                ...state,
                newProduct
            ]
        case REMOVE_PRODUCT:
            return state.filter(product => product.id !== action.id)
        case INC_PRODUCT:
            return state.map(product => {
                const modifiedProduct = Object.assign({}, product)
                if (modifiedProduct.id === action.id) {
                    modifiedProduct.num += 1
                }
                return modifiedProduct
            })
        case DEC_PRODUCT:
            return state.map(product => {
                const modifiedProduct = Object.assign({}, product)
                if (modifiedProduct.id === action.id) {
                    modifiedProduct.num -= 1
                }
                return modifiedProduct
            })
    }
}

export default function () {
    const initState = []
    const [products, productsDispatch] = useReducer(productReducer, initState)

    return {
        productsOnCart: products,
        productsDispatch
    }
}
