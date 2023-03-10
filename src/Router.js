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
import KaKaoLogin from './pages/Login/KakaoLogin/KaKaoLogin';
import Calendar from './pages/Calendar/Calendar';
import ExamInfo from './pages/ExamInfo/ExamInfo';
import SignUp from './pages/SignUp/SignUp';
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
        <Route path="/certification" element={<Certification />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/examinfo" element={<ExamInfo />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
