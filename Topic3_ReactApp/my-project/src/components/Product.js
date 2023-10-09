const Product = ({ productList, categoryList, categoryID }) => {

    let getProductByCategory = () => {
        let filterProduct = productList;
        if (categoryID) {
            filterProduct = productList.filter((product) => {
                return product.categoryID === categoryID
            })
        }
        return filterProduct;
    }
    return (
        <>
            <div>
                <h2>List of products</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getProductByCategory().map((item) => {
                                let category = categoryList.find((category) => category.id === item.categoryID);
                                return (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{category ? category.name : "None"}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Product;