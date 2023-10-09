
const Category = ({ categoryList, onClickFilterProduct }) => {

    return (
        <>
            <div>
                <h2>Category</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            categoryList.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td onClick={() => onClickFilterProduct(item.id)}>{item.name}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div >
        </>
    )
}

export default Category;

//Advenced task
//When users click on the name of Category, filter product by category.