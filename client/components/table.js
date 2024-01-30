import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';




export default function BasicTable(id) {

    const [dataArray, setDataArray] = useState([]);

  useEffect(() => {


    const fetchData = async () => {
      console.log(id);

        id = id.id
        
      try {
        const response = await fetch( `http://127.0.0.1:8080/stats/${id}`);
        const data = await response.json();
        console.log(data);

    
        
        if (data && Array.isArray(data.data)) {
           
            setDataArray(data.data);
          } else {
            console.error('Invalid data structure received:', data);
          }
       
    
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

   
     fetchData();
  }, [id]);

  let total = 0;

  for (let i = 0; i < dataArray.length; i++){
    total = total + dataArray[i].count
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><div className='font-bold'>Pitch Type</div></TableCell>
            <TableCell align="center"><div className='font-bold'>Count</div></TableCell>
            <TableCell align="center"><div className='font-bold'>Usage</div></TableCell>
            <TableCell align="center"><div className='font-bold'>Avg Velocity&nbsp;(mph)</div></TableCell>
            <TableCell align="center"><div className='font-bold'>Avg Horiztonal Break&nbsp;(in)</div></TableCell>
            <TableCell align="center"><div className='font-bold'>Avg Spin Rate&nbsp;(rpm)</div></TableCell>
            <TableCell align="center"><div className='font-bold'>Avg Induced Vertical Break&nbsp;(in)</div></TableCell>
            <TableCell align="center"><div className='font-bold'>Avg Hit Exit Velocity&nbsp;(mph)</div></TableCell>
            <TableCell align="center"><div className='font-bold'>Avg Hit Launch Angle&nbsp;(°)</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataArray.map((row) => (
            
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <div className='font-bold'>{row.name}</div>
              </TableCell>
              <TableCell align="center">{row.count}</TableCell>
              <TableCell align="center">{((row.count * 100)/(total)).toFixed(2)}%</TableCell>
              <TableCell align="center">{row.velocity}</TableCell>
              <TableCell align="center">{row.horizontal_break}</TableCell>
              <TableCell align="center">{row.spin_rate}</TableCell>
              <TableCell align="center">{row.induced_vertical_break}</TableCell>
              <TableCell align="center">{row.hit_exit_speed}</TableCell>
              <TableCell align="center">{row.hit_launch_angle}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}