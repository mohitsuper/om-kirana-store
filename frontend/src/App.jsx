import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Headers from './commen/Headers';
import TopBar from './commen/Topbar';
import Footer from './commen/Footer';
import ProductInfo from './pages/ProductInfo';
import ReturnPolicy from './pages/ReturnPolicy';
import { ContactUs } from './pages/ContactUs';
import Error404 from './pages/Error404';
import AdminLogin from './pages/Admin/Login';
import AdminLayout from './pages/Admin/AdminLayout';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminProducts from './pages/Admin/Products';
import AdminCategories from './pages/Admin/Categories';
import AdminOrders from './pages/Admin/Orders';
import AdminCustomers from './pages/Admin/Customers';
import AdminSettings from './pages/Admin/Settings';

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {!isAdminRoute && <TopBar />}
      {!isAdminRoute && <Headers />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/return-policy" element={<ReturnPolicy />} />
          <Route path="/product/:id" element={<ProductInfo />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="products/*" element={<AdminProducts />} />
            <Route path="categories/*" element={<AdminCategories />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>
      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
