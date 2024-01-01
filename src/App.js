import { Routes, Route } from "react-router-dom";
import Navbar from "components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { useState } from "react";
import { CartProducts } from "./hooks/hooks";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
      <CartProducts.Provider value={{ cart, setCart }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </CartProducts.Provider>
    </>
  );
}

export default App;
