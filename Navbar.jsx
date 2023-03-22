import { AppBar, Box, Button, Toolbar } from '@mui/material'
import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
  
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position='static'>
            <Toolbar>            
                <Button color='inherit'>
                    
                <Link to="/st" style={{color:'white', textDecoration:'none'}}>View</Link></Button>
                <Button color='inherit'>
                <Link to="/add" style={{color:'white', textDecoration:'none'}}>New students</Link></Button>
            </Toolbar>
        </AppBar>
      </Box>
  
  )
}

export default Navbar