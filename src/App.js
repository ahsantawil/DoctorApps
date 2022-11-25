import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Claim from './pages/Claim/Claim';
import Customer from './pages/Customer';
import Dashboard from './pages/Dashboard';
import Delivery from './pages/Delivery';
import Produk from './pages/Product';
import Replace from './pages/Replace';
import Users from './pages/Users';
import AddUsers from './pages/Users/AddUsers';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/pengiriman' element={<Delivery />} />
        <Route path='/klaim' element={<Claim />} />
        <Route path='/penggantian' element={<Replace />} />
        <Route path='/produk' element={<Produk />} />
        <Route path='/customer' element={<Customer />} />
        <Route path='/user' element={<Users />} />
        <Route path='/user/add' element={<AddUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
