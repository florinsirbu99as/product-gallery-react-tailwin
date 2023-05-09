import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductGallery from "./pages/productGallery";
import ProductOverview from "./pages/productOverview";
import Header from "./components/header";
import dotenv from "dotenv";
dotenv.config();

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Header />
          <Route path="/" element={<ProductGallery />} />
          <Route path="/:name" element={<ProductOverview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
