import React from 'react'
import Box from "@mui/material/Box";
import CandidateTable from '../../components/Table/CandidateTable';
function AdminCandidate() {
  return (
    <>
     <Box sx={{position:"relative", top:"150px"}}>
    <CandidateTable/>
    </Box>
    
    </>
  )
}

export default AdminCandidate