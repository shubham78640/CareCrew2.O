import React from "react";
import { Box } from "@mui/material";
import Table from "../../components/Table/Table";
function AdminTable() {
  return (
    <>
    <Box sx={{position:"relative", top:"150px"}}>
        <Table/>
    </Box>
    </>
  );
}

export default AdminTable;
