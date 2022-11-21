import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect } from 'react';
import axios from 'axios';
import { TablePagination } from '@mui/material';

export default function BasicTable() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [coinData, setCoinData] = useState([]);
  useEffect(() => {
    async function getdata() {
      var response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=dogecoin%2C%2bitcoin&category=cryptocurrency&order=market_cap_desc&per_page=100&page=1&sparkline=false `
      );
      setCoinData([ ...response.data ]);
      console.log(response.data);
    }
    getdata();
  }, []);

  let arr = ["Currency Name","Symbol","Current Price","Price Change","Market Rank"]
  return (
    <>
    {
      !(coinData.length === 0) ?
      <Paper sx={{ width: '100%' }}>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
         
          <TableRow>
            {
              arr.map((item)=>{
               return <TableCell align="right">{item}</TableCell>
              })
            }
          </TableRow>
        </TableHead>
        <TableBody>
          {coinData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(({image, current_price, price_change_24h,market_cap_rank,name}) => (
            <TableRow
              key={name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {name}
              </TableCell>
              <TableCell align="right"><img style={{width:"5rem",height:"5rem"}} src= {image} alt="" /></TableCell>
              <TableCell align="right">{current_price}</TableCell>
              <TableCell align="right">{price_change_24h}</TableCell>
              <TableCell align="right">{market_cap_rank}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={coinData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    :
    null
    }
    </>
    
  );
}