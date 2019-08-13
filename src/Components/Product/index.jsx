import React, { useState } from 'react'
import { addProduct, removeProduct, incProduct, decProduct } from '../Cart/actions'
import Products from '../Cart/reducers'

import './styles.scss'

function Product({product, productsOnCart, productsDispatch}) {
    const { id, productName, productPrice, productAsset, productDescription } = product
    const [ size, setSize ] = useState(null)

    const addToCartHandler = () => {
        if (!size) return

        const productId = `${id}-${size}`
        if (productsOnCart.find(product => product.id === productId)) {
            productsDispatch(incProduct(productId))
            return
        }
        const product = {
            id: productId,
            productName,
            productPrice,
            productAsset,
            size: size
        }

        productsDispatch(addProduct(product))
    }

    return (
        <div className="product">
            <div className="product__asset">
                <img src={productAsset.url} alt={productName}/>
            </div>
            <div className="product__info">
                <h2 className="product__name">{productName}</h2>
                <p className="product__price">${productPrice.toFixed(2)}</p>
                <p className="product__description">{productDescription}</p>
                <div className="product__sizes">
                    <p>SIZE<span>*</span><span>{size}</span></p>
                    <button onClick={() => setSize('S')}>S</button>
                    <button onClick={() => setSize('M')}>M</button>
                    <button onClick={() => setSize('L')}>L</button>
                </div>
                <button className="product__cta" onClick={addToCartHandler}>ADD TO CART</button>
            </div>
        </div>
    )
}

export default Product
