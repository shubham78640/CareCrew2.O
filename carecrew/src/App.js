import { Box } from '@mui/material'
import React from 'react'
import Navbaar from './components/Headers/Navbaar'
import Home from './components/Home/Home'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AboutUsPage from "../src/Pages/AboutUs/AboutUsPage"
import ContactUs from './Pages/ContactUs/ContactUs'
import JobsEnglish from './Pages/JobSection/JobsEnglish'
import JobsHindi from './Pages/JobSection/JobsHindi'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbaar/>
        <Box>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/aboutus" element={<AboutUsPage/>} />
              <Route path="/contactus" element={<ContactUs/>} />
              <Route path="/jobs/:jobsenglish" element={<JobsEnglish/>} />
              <Route path="/jobs/jobshindi" element={<JobsHindi/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>

  )
}

export default App