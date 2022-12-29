import React from "react";
import { Box } from "@mui/material";
import Table from "../../components/Table/Table";
function AdminTable() {
  return (
    <>
    <Box p="0% 0.2%" sx={{position:"relative", top:"130px"}}>
        <Table/>
    </Box>
    </>
  );
}

export default AdminTable;
