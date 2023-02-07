import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Main from './pages/Main/Main';
import Footer from './components/Footer/Footer';
import ChangeExam from './pages/ChangeExam/ChangeExam';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/changeExam" element={<ChangeExam />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
