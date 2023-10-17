import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Albums, Photos, PhotoDetail } from "./components/index";

function App() {
  return (
    <>
      <div className="container">
        <BrowserRouter>
          <h1 className="text-uppercase">Dashboard</h1>
          <div className="row d-flex">
            <div className="col-md-2 col-12 d-flex flex-column">
              <Link to={"/albums"}>Albums</Link>
              <Link to={"/photos"}>Photos</Link>
            </div>
            <div className="col-md-10 col-12">
              <Routes>
                <Route path="/" element={<Albums />} />
                <Route path="/albums" element={<Albums />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/photos/:id" element={< PhotoDetail />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
