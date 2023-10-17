import { useState } from "react";
import ProductList from "./components/Product";
import CategoryList from "./components/Category";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
      <BrowserRouter>
        <div>
          <h1>Homepage</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Routes>
              <Route path="/" element={<CategoryList categories={categoryList} onClickFilterProduct={handleFilterProduct} />} />
              <Route path="/products" element={<ProductList products={productList} selectedCategoryID={selectedCategoryID} />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
