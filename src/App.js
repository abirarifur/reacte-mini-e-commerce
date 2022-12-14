import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        <Route
          path="/login"
          element={user ? <Navigate to="/" replace={true} /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" replace={true} /> : <Register />}
        />
        <Route
          path="/success"
          element={user ? <Navigate to="/" replace={true} /> : <Success />}
        />
      </Routes>
    </Router>
  );
}

export default App;
