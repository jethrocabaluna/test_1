const ADD_PRODUCT = 'ADD_PRODUCT'
const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
const INC_PRODUCT = 'INC_PRODUCT'
const DEC_PRODUCT = 'DEC_PRODUCT'

const addProduct = (product) => ({
    type: ADD_PRODUCT,
    product
})

const removeProduct = (id) => ({
    type: REMOVE_PRODUCT,
    id
})

const incProduct = (id) => ({
    type: INC_PRODUCT,
    id
})

const decProduct = (id) => ({
    type: DEC_PRODUCT,
    id
})

export {
    ADD_PRODUCT,
    addProduct,
    REMOVE_PRODUCT,
    removeProduct,
    INC_PRODUCT,
    incProduct,
    DEC_PRODUCT,
    decProduct
}
