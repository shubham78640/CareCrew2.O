import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Navbaar from './components/Headers/Navbaar'
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AboutUsPage from "../src/Pages/AboutUs/AboutUsPage"
import ContactUs from './Pages/ContactUs/ContactUs'
import JobsEnglish from './Pages/JobSection/JobsEnglish'
import JobsHindi from './Pages/JobSection/JobsHindi'
import sanityClient from '../src/libs/client'
import Blog from './Pages/Blog/Blog'
import Single from './Pages/single/Single'
import Housekeeping_Service from './Pages/Service/Housekeeping_Service'
import Cooking_Services from './Pages/Service/Cooking_Services'
import Others_Sevices from './Pages/Service/Others_Sevices'
import ChildCare_Services from './Pages/Service/ChildCare_Services'
import ElderCare_Servies from './Pages/Service/ElderCare_Servies'
import Driving_Services from './Pages/Service/Driving_Services'
import WorkProcess from './Pages/How_does_it_work/WorkProcess'
import AdminTable from './Pages/AdminTable/AdminTable'

function App() {
  
  return (
    <div>
      <BrowserRouter>
     <Navbaar />
        <Box>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/aboutus" element={<AboutUsPage/>} />
              <Route path="/contactus" element={<ContactUs/>} />
              <Route path="/jobs/jobsenglish" element={<JobsEnglish/>} />
              <Route path="/jobs/jobshindi" element={<JobsHindi/>} />
              <Route path="/blogs" element={<Blog/>}/>
              <Route path="blogs/:slug" element={<Single />}/>
              <Route path="/services/housekeeping" element={<Housekeeping_Service />} />
              <Route path="/services/cooking" element={<Cooking_Services />} />
              <Route path="/services/driver" element={<Driving_Services />} />
              <Route path="/services/childcare" element={<ChildCare_Services />} />
              <Route path="/services/eldercare" element={<ElderCare_Servies />} />
              <Route path="/services/others" element={<Others_Sevices />} />
              <Route path="/process" element={<WorkProcess/> } />
              <Route path="/admin" element={<AdminTable/> } />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>

  )
}

export default App