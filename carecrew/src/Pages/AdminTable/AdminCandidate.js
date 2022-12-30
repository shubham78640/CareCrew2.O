import React from 'react'
import Box from "@mui/material/Box";
import CandidateTable from '../../components/Table/CandidateTable';
function AdminCandidate() {
  return (
    <>
     <Box p="0% 0.2%"sx={{position:"relative", top:"130px"}}>
    <CandidateTable/>
    </Box>
    
    </>
  )
}

export default AdminCandidate