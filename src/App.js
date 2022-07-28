/* eslint-disable react/jsx-no-undef */
import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import NewMenu from './components/NewMenu/NewMenu'

const App = () => {
  return (
    <>
      <Header/>
      <MainContent/>
      <NewMenu/>
    </>
  )
}

export default App