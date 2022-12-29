import React, { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    width: 100,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Mobile",
    width: 100,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    type: "text",
    width: 100,
    
  },
  {
    field: "service",
    headerName: "Services",
    width: 100,
    editable: true,
  },
  {
    field: "workingHours",
    headerName: "Working Hr",
    width: 110,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Date",
    width: 110,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    width: 110,
    editable: true,
  },
  {
    field: "locality",
    headerName: "Locality",
    width: 110,
    editable: true,
  },
  {
    field: "address",
    headerName: "Address",
    type: "text",
    width: 200,
    editable: true,
  },
  {
    field: "message",
    headerName: "Message",
    type: "text",
    width: 200,
    editable: true,
  },
];

function Table() {
  const [tabledata, setTabledata] = useState([]);
  const [citydata, setCitydata] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      let dataTable = await fetch( 
        // "http://13.126.160.155:8082/carecrew/get/data/"
        "http://localhost:8082/carecrew/carecrew/get/data/"
        
        );
      let table = await dataTable.json();

      // console.log("data sam",table.data);
       let adminTableData = await table.data;
       let cityData=  adminTableData;
      //  setCitydata(cityData)
      setTabledata(adminTableData);
      console.log(cityData)
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
