/* eslint-disable react/jsx-no-undef */
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Menu from './components/Menu/Menu'
import NewMenu from './components/NewMenu/NewMenu'
import Review from './components/Review/Review'
import NotFound from './pages/NotFound/NotFound'
import Basket from './pages/Basket/Basket'


const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<NewMenu />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/" element={<AboutUs />} />
        <Route path="/" element={<Review />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App