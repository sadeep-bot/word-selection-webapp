import { BrowserRouter,  Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import DataProvider from './context/DataContext'
import MainLayout from './components/MainLayout'
import Home from './routes/Home'
import Settings from './routes/Settings'
import InstructionsPage from './routes/InstructionsPage'

import './App.css'
import './styles/settings.css'
import './styles/NavBar.css'
import './styles/MainLayout.css'

function App() {

  return (
   <BrowserRouter>
    <DataProvider>
      <Routes >
        <Route element={<MainLayout />}>
          <Route path='/' element={<Home/>} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/instructions' element={<InstructionsPage />} />
        </Route>
      </Routes>
    </DataProvider>
   </BrowserRouter>
  )
}

export default App
