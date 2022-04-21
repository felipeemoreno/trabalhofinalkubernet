import { useEffect, useState } from 'react';
import { getCustomers, deleteCustomer } from '../services/api';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

// import { Link } from 'react-router-dom';

const ListCustomersPage = () => {
  const columns = [
    { field: 'name', headerName: 'Nome', minWidth: 250, flex: 1  },
    { field: 'email', headerName: 'E-mail', minWidth: 250, flex: 1 },
  ];

  const [customers, setCustomers] = useState([]);
  
  useEffect(() => {
    getCustomersFromApi();
    document.title = "Listar Clientes";
  }, [])


  const getCustomersFromApi = async () => {
    try {
      const response = await getCustomers();
      if (response.status !== 200) {
        return false; // tratar esse erro
      }
      const customers = response.data.map(customer => {
        return customer;
      });

      setCustomers(customers);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{my: 3}}>
        Clientes
      </Typography>
      <Box sx={{ height: 300, width: '100%' }}>
        <DataGrid
          rows={customers}
          columns={columns}
          checkboxSelection
        />
      </Box>
    </Container>
  )
}

export default ListCustomersPage;