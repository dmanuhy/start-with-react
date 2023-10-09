import { useState } from "react";
import ProductList from "./components/Product";
import CategoryList from "./components/Category";
const productList = [
  { id: 1, name: "Macbook Pro M1", categoryID: 1 },
  { id: 2, name: "Samsung Note 9 Pro", categoryID: 2 },
  { id: 3, name: "Iphone 15 ProMax", categoryID: 1 }
]

const categoryList = [
  { id: 1, name: "Smartphone" },
  { id: 2, name: "Tablet" }
]

function App() {

  const [selectedCategoryID, setSelectedCategoryID] = useState(null);
  const handleFilterProduct = (categoryID) => {
    setSelectedCategoryID(categoryID);
  };

  return (
    <>
      <div>
        <h1>Homepage</h1>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <CategoryList categories={categoryList} onClickFilterProduct={handleFilterProduct} />
          <ProductList products={productList} selectedCategoryID={selectedCategoryID} />
        </div>
      </div>
    </>
  );
}

export default App;
