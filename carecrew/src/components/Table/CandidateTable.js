import React ,{useState}from 'react'
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 150 },
  {
    field: "name",
    headerName: "Name",
    width: 250,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Mobile",
    width: 200,
    editable: true,
  },
  {
    field: "abc",
    headerName: "Services",
    width: 300,
    editable: true,
  },
  {
    field: "",
    headerName: "City",
    width: 200,
    editable: true,
  },
  {
    field: "createdAt",
    headerName: "Date",
    width: 200,
    editable: true,
  },
];

function CandidateTable() {

    const [tabledata, setTabledata] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        let dataTable = await fetch( "http://13.126.160.155:8082/candidate/get/candidates/");
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
     
     <Box  sx={{ height: 700, width: "100%", }} >
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