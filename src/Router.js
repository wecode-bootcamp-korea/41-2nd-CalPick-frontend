import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Selected from './pages/Selected/Selected';
import Mypage from './pages/Mypage/Mypage';
import Footer from './components/Footer/Footer';
import Redirect from './pages/Login/SocialLogin/Redirect';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
