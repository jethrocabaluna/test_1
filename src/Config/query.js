const QUERIES = {
    products: `
        products {
            id
            productName
            productPrice
            productAsset {
                url
            }
            productDescription
        }
    `
}

export default QUERIES
