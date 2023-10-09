const Product = ({ id, name }) => {
    return (
        <>
            <div className="item" key={id}>
                <div className="image"></div>
                <h4>{name}</h4>
                <div className="price"></div>
            </div>
        </>
    )
}

const ProductList = ({ products = [], selectedCategoryID }) => {
    let getProductByCategory = () => {
        let filterProduct = products;
        if (selectedCategoryID) {
            filterProduct = products.filter((product) => {
                return product.categoryID === selectedCategoryID
            })
        }
        return filterProduct;
    }
    return (
        <>
            <div className="container">
                <h2>List of products</h2>
                {
                    getProductByCategory().map(({ id, name }) => {
                        return (<Product id={id} name={name} />)
                    })
                }
            </div>
        </>
    )
}

export default ProductList;