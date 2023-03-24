import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blog from './pages/Blog';
import Compare from './pages/CompareProducts';
import WishList from './pages/WishList';
import Login from './pages/Login';
import Forgotpassword from './pages/Forgotpassword';
import Signup from './pages/Signup'
import ResetPassword from './pages/ResetPassword';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="store" element={<OurStore />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="compare-product" element={<Compare />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="login" element={<Login/>} />
            <Route path="forgot-password" element={<Forgotpassword/>} />
            <Route path="sign-up" element={<Signup/>} />
            <Route path="reset-password" element={<ResetPassword/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
