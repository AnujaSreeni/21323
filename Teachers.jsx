import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import { Button, TableBody, TableRow, Typography } from '@mui/material'
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import axios from 'axios';

const Teachers = () => {
        var [teachers,setTeachers] = useState([])
        useEffect(() =>{
            axios.get("http://localhost:3005/teachers") 
            .then(response=>{
                console.log(response.data)
                setTeachers(teachers=response.data)
            })
            .catch(err=>console.log(err))
        },[])
  return (
    <div>
    <Typography>List of Teachers</Typography>
      <TableContainer>
       <Table>
           <TableHead>
               <TableRow>
                   <TableCell>Id</TableCell>
                   <TableCell>Name</TableCell>
                   <TableCell>Class</TableCell>
                </TableRow>
           </TableHead> 
           <TableBody>
                {teachers.map((value,index)=>{
                    return<TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.class}</TableCell>
                    </TableRow>
                })}
           </TableBody>
       </Table>
      </TableContainer>
    </div>
  )
}

export default Teachers
