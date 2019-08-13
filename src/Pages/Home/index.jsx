import React, { Fragment } from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import QUERIES from 'Config/query'

import Cart from 'Components/Cart'
import Product from 'Components/Product'

import Products from 'Components/Cart/reducers'

function Home({ data }) {
    if (data.loading) {
        return <h1>Loading...</h1>
    } else if (data.error) {
        return <h1>Error fetching data</h1>
    }

    const { products } = data
    const { productsOnCart, productsDispatch } = Products()

    return (
        <Fragment>
            <div className="container">
                <Cart productsOnCart={productsOnCart} />
                {
                    products.map((product, i) => <Product key={i} product={product} productsOnCart={productsOnCart} productsDispatch={productsDispatch} />)
                }
            </div>
        </Fragment>
    )
}

const query = gql`
    {
        ${QUERIES.products}
    }
`

export default graphql(query)(Home)
