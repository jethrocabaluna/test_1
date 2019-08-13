import React, { useState } from 'react'

import './styles.scss'

function Cart({productsOnCart}) {
    const [isOpen, setIsOpen] = useState(false)
    const totalItems = productsOnCart.reduce((val, product) => {
        return product.num + val
    }, 0)

    return (
        <div className="cart">
            <div className="container">
                <button className={`cart__button ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
                    My Cart ({totalItems})
                </button>
                <div className={`cart-items ${isOpen ? 'open' : ''}`}>
                    {
                        productsOnCart.map(({productAsset, productName, num, productPrice, size}, i) => (
                            <div className="cart-item" key={i}>
                                <div className="cart-item__asset">
                                    <img src={productAsset.url} alt={productName}/>
                                </div>
                                <div className="cart-item__info">
                                    <h2 className="cart-item__name">{productName}</h2>
                                    <p className="cart-item__price">{num}x ${productPrice.toFixed(2)}</p>
                                    <p className="cart-item__size">Size: {size}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Cart
