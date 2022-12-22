import React from 'react'
import { Box } from '@mui/material'
import Table from '../../components/Table/Table'
function AdminTable() {
  return (
    <>
    <Box mt={5} >

        <Box p={3} sx={{backgroundColor:"green", color:"white", display:"flex", justifyContent:"space-between"}}>
            <Box>CARE CREW</Box>
            <Box>Admin </Box>
        </Box>
        <Table/>
    </Box>
    </>
  )
}

export default AdminTable