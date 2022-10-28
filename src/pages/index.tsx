import type { NextPage } from "next";
import Image from "next/image";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams  } from '@mui/x-data-grid'
import BarChart from '@/components/doughnut-chart/doughnut-chart'
import Icon from '@mui/material/Icon';

const Home: NextPage = () => {

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      headerClassName: 'blue-header',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];

    const styleCardClose = {
      background: '#111315',
      borderRadius: '20px',
      boxShadow:  'inset -5px -5px 10px rgba(60, 60, 60, 0.3), inset 5px 5px 10px #000000;',
      height: 130,
      width: '70%',
      margin: '10px 10px 10px 10px',
      padding: '15px',
      textAlign: 'center',
      color: 'white'
    };

    const styleCardOpen = {
      background: '#111315',
      borderRadius: '20px',
      boxShadow: '-4px -4px 8px #272727, 4px 4px 8px #000000;',
      height: 130,
      width: '70%',
      margin: '10px 10px 10px 10px',
      padding: '15px',
      textAlign: 'center',
      color: 'white'
    };

   const styleAverageRed={
       color: 'red',
       fontSize: '13px'
   }

    const styleAverageGreen={
      color: 'green',
      fontSize: '13px'
    }

  return (
    <Box sx={{ height: 400,width: '90%'}}>
       <div style={{ display: 'flex' }}>
            <div style={styleCardClose}>
                 <Icon> <img src="/icons/order.svg" height={17} width={16} /> </Icon> Ordenes
                 <br /> <label style={{ fontWeight: 'bold',color: 'green' }}>25</label>
                 <br /> <label style={{ fontSize: '14px' }}>Pedidos entregados</label>
                 <br /> <Icon> <img src="/icons/up.svg" height={16} width={15} /> </Icon> <label style={styleAverageGreen}>%20</label>
            </div>
            <div style={styleCardClose}>
                 <Icon> <img src="/icons/label.svg" height={17} width={16} /> </Icon> Riders
                 <br /> <label style={{ fontWeight: 'bold' }}>25</label>
                 <br /> <label style={{ fontSize: '14px' }}>Disponibles</label>
                 <br /> <Icon> <img src="/icons/down.svg" height={16} width={15} /> </Icon> <label style={styleAverageRed}>%20</label>
            </div>
            <div style={styleCardClose}>
                 <Icon> <img src="/icons/label.svg" height={17} width={16} /> </Icon> Servicio al cliente
                 <br /> <label style={{ fontWeight: 'bold' }}>25</label>
                 <br /> <label style={{ fontSize: '14px' }}>Pedidos entregados</label>
                 <br /> <Icon> <img src="/icons/down.svg" height={16} width={15} /> </Icon> <label style={styleAverageRed}>%20</label>
            </div>
       </div>

       <div style={{ margin: '10px 10px 10px 10px',height: 350,width: '98%' }}>
       <DataGrid
           rows={rows}
           columns={columns}
           pageSize={5}
           rowsPerPageOptions={[5]}
           checkboxSelection
           disableSelectionOnClick
           disableVirtualization={true}
           experimentalFeatures={{ newEditingApi: true }}
           sx={{
             backgroundColor: '#1a1d1f',
             color: 'white',
             '.MuiDataGrid-row:nth-child(even)': {
               backgroundColor: '#1a1d1f',
               color: 'white'
             },
             '.MuiDataGrid-row:nth-child(odd)': {
               backgroundColor: '#2a2d2f',
               color: 'white'
             },
             '.MuiDataGrid-columnSeparator': {
               display: 'none',
             },
             '.MuiDataGrid-columnHeaders': {
               backgroundColor: '#007AFF',
             },
             "& .MuiToolbar-root, .MuiButtonBase-root": {
               color: "#fff"
             },
             '&.MuiDataGrid-root': {
               border: 'none',
             },
             '&>.MuiDataGrid-main': {
               '&>.MuiDataGrid-columnHeaders': {
                 borderBottom: 'none',
               },
               '& div div div div >.MuiDataGrid-cell': {
                 borderBottom: 'none',
               },
             }
           }}
         />
       </div>
    </Box>
  );
};

export default Home;


 /* <BarChart name={"texto"}></BarChart> */