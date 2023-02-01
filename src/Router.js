import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Selected from './pages/Selected/Selected';
import Mypage from './pages/Mypage/Mypage';
import Certification from './pages/Certification/Certification';
import Footer from './components/Footer/Footer';
import Order from './pages/Order/Order';
import ExamList from './pages/ExamList/ExamList';
import ExamInfo from './pages/ExamInfo/ExamInfo';
import KaKaoLogin from './pages/Login/KakaoLogin/KaKaoLogin';
import Calendar from './pages/Calendar/Calendar';
import Signup from './pages/signUp/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/selected" element={<Selected />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/auth/kakao/callback" element={<KaKaoLogin />} />
        <Route path="/order" element={<Order />} />
        <Route path="/examlist" element={<ExamList />} />
        <Route path="/examInfo" element={<ExamInfo />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
