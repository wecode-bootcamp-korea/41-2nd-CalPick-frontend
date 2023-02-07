import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Signup from './pages/SignUp/SignUp';
import Main from './pages/Main/Main';
import Selected from './pages/Selected/Selected';
import Mypage from './pages/Mypage/Mypage';
import Certification from './pages/Certification/Certification';
import Footer from './components/Footer/Footer';
import Redirect from './pages/Login/SocialLogin/Redirect';
import Order from './pages/Order/Order';
import ExamList from './pages/ExamList/ExamList';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/redirect" element={<Redirect />} />
        <Route path="/order" element={<Order />} />
        <Route path="/examlist" element={<ExamList />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
