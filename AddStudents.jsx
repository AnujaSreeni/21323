import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const AddStudents = () => {
    var [students,setstudents] = useState({
        id:"",
        name:"",
        grade:""
    })
    const handleChange=(e)=>{
        const {name,value} =e.target 
        setstudents({...students,[name]:value})
        console.log(students);
    }
    const saveData = ()=>{
    console.log("Button clicked");
    axios.post("http://localhost:3005/students",students)
    .then(response=>{
        alert("Succesfully added")
    })
    .catch(error=>{ 
        alert("Failed")
    })
}
  return (
    <div>
      <Typography variant='h2'> New Students</Typography>
      <TextField label='id' variant='outlined' name='id' value={students.id} onChange={handleChange}/>
      <br></br>
      <br></br>
      <TextField label='name' variant='outlined' name='name' value={students.name} onChange={handleChange}/>
      <br></br>
      <br></br>
      <TextField label='grade' variant='outlined' name='grade' value={students.grade} onChange={handleChange}/>
      <br></br>
      <br></br>
      <Button variant='contained' color='secondary' onClick={saveData}>SUBMIT</Button>
    </div>
  )
}

export default AddStudents
