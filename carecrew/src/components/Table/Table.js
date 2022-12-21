import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "firstName",
    headerName: "Name",
    width: 200,
    editable: true,
  },
  {
    field: "contactNumber",
    headerName: "Mobile",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "text",
    width: 170,
    editable: true,
  },
  {
    field: "imageUrl",
    headerName: "Services",
    width: 150,
    editable: true,
  },
  {
    field: "salary",
    headerName: "Working Hr",
    width: 110,
    editable: true,
  },
  {
    field: "dob",
    headerName: "Date",
    width: 110,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "City",
    width: 110,
    editable: true,
  },
  {
    field: "address",
    headerName: "Address",
    type: "text",
    width: 300,
    editable: true,
  },
];

function Table() {
  const [tabledata, setTabledata] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      let data = await fetch(
        "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"
      );
      let table = await data.json();
      setTabledata(table);
    };
    fetchData();
  }, []);
  console.log("tabledata", tabledata);
  return (
    <>
      <Box  sx={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={tabledata}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
}

export default Table;
