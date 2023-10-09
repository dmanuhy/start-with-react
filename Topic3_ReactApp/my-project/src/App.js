import { useState } from "react";
import Product from "./components/Product";
import Category from "./components/Category";

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
        <div style={{ display: "flex", justifyContent: 'space-between' }}>
          <Product productList={productList} categoryList={categoryList} categoryID={selectedCategoryID} />
          <Category categoryList={categoryList} onClickFilterProduct={handleFilterProduct} />
        </div>
      </div>
    </>
  );
}

export default App;
