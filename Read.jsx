import { Button, TableBody, TableRow, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';

import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import axios from 'axios';

const Read = () => {
    var [students,setstudents] = useState([])

    useEffect(() =>{
        axios.get("http://localhost:3005/students") 
        .then(response=>{
            console.log(response.data)
            setstudents(students=response.data)
        })
        .catch(err=>console.log(err))
    })
    const deletestudents=(id)=>{
        console.log("delete clicked"+id)
        axios.delete("http://localhost:3005/students/"+id)
        .then("deleted")
        window.location.reload(false)
    }
  return (
    <div>
      <Typography>Welcome to my App</Typography>
       <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Grade</TableCell>
                <TableCell>Delete</TableCell>
                <TableCell>Update</TableCell>
                </TableRow>
            </TableHead> 
            <TableBody>
                {students.map((value,index)=>{
                    return<TableRow>
                        <TableCell>{value.id}</TableCell>
                        <TableCell>{value.name}</TableCell>
                        <TableCell>{value.grade}</TableCell>
                        <TableCell>
                            <Button onClick={()=>deletestudents(value.id)}>Delete</Button>
                        </TableCell>
                        <TableCell>
                            <Button>Update</Button>
                        </TableCell>
                    </TableRow>
                })}
            </TableBody>
        </Table>
       </TableContainer>
    </div>
  )
}

export default Read
