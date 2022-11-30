import { Box } from '@mui/material'
import React from 'react'
import Navbaar from './components/Headers/Navbaar'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbaar/>
        <Box>
          <Routes>
              <Route path="/" element={<Home/>} />
            
          </Routes>
        </Box>
      </BrowserRouter>
    </div>

  )
}

export default App