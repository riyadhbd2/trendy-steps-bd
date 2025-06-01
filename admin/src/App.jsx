import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Navbar from "./components/Navbar";
import AddProducts from "./pages/AddProducts";
import ProductsList from "./pages/ProductsList";
import OrdersList from "./pages/OrdersList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<AddProducts />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/orders" element={<OrdersList />} />
        </Routes>
      </Layout>
    </div>
  );
};

export default App;
