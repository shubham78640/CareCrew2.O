import React ,{useState}from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "name",
    headerName: "Name",
    width: 300,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Mobile",
    width: 200,
    editable: true,
  },
  {
    field: "services",
    headerName: "Services",
    width: 450,
    editable: true,
  },
  {
    field: "city",
    headerName: "City",
    width: 300,
    editable: true,
  },
];

function CandidateTable() {
    const [tabledata, setTabledata] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        let dataTable = await fetch( 
          "http://13.126.160.155:8082/carecrew/candidate/get/candidates/"
          );
         let table = await dataTable.json();
         let adminTableData = await table.data;
         let cityData=  adminTableData;
        setTabledata(adminTableData);
        console.log(cityData)
      };
      fetchData();
    }, []);
     console.log("tabledata", tabledata);
  return (
    <>
     <Box  sx={{ height: 900, width: "100%", }} >
        <DataGrid
          rows={tabledata}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    
    </>
  )
}

export default CandidateTable