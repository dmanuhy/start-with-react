
const CategoryList = ({ categories, onClickFilterProduct }) => {

    return (
        <>
            <ul style={{ display: "flex", flexDirection: "row", gap: "40px" }}>
                {
                    categories.map(({ id, name }) => {
                        return (
                            <>
                                <li key={id} onClick={() => onClickFilterProduct(id)}>{name}</li>
                            </>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default CategoryList;

//Advenced task
//When users click on the name of Category, filter product by category.