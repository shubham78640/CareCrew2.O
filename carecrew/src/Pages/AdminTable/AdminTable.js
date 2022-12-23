import React from "react";
import { Box } from "@mui/material";
import Table from "../../components/Table/Table";
function AdminTable() {
  return (
    <>
      <Box>
        <Box
          mb={5}
          p={3}
          mt={23}
          sx={{
            backgroundColor: "#007a47",
            color: "white",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ color: "yellow", fontWeight: "900", fontSize: "20px" }}>
            CARE CREW
          </Box>
          <Box>Admin </Box>
        </Box>
        <Table />
      </Box>
    </>
  );
}

export default AdminTable;
