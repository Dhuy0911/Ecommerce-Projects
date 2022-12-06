
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Achievement from './components/Achievement/Achievement';
import AddPage from './components/Admin/AddPage/Addpage';
import Admin from './components/Admin/Admin';
import EditPage from './components/Admin/EditPage/EditPage';
import AdminLayout from './components/Admin/Layout/AdminLayout';
import CartContext from './context/CartContext';
import { NotFoundPage } from './pages/404/NotFoundPage';
import CartPage from './pages/CartPage/CartPage';
import DetailProduct from './pages/DetailProduct/DetailProduct';

import HomePage from './pages/HomePage/HomePage';
import ProductsShopPage from './pages/ProductsShopPage/ProductsShopPage';


function App() {
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <CartContext.Provider value={{
      cart,
      setCart
    }}>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<ProductsShopPage />} />
          <Route path='/product/:id' element={<DetailProduct />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/user/admin' element={<AdminLayout />}>
            <Route path='/user/admin/dashboard' element={<Admin />} />
            <Route path='/user/admin/editproduct/:id' element={<EditPage />} />
            <Route path='/user/admin/addproduct' element={<AddPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />

        </Routes>

      </div>
    </CartContext.Provider>
  );
}

export default App;
