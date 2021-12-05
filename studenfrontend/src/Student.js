import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button} from '@mui/material';

export default function Student() {
    const paperStyle={padding:'50px 20px', width:600,margin:"20px auto"}
    const[name,setName]=useState('')
    const[adress,setAdress]=useState('')
    const[students,setStudents]=useState([])
    const classes = useStyles();
    const handleClick=(e)=>{
        e.preventDefault()
        const student={name,adress}
        console.log(student)
        fetch("http://localhost:8080/student/add",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)

  }).then(()=>{
    console.log("New Student added")
  })
    }
  return (
      <Container>
          <Paper elevation={3} style={paperStyle}>
              <h1> Add Student</h1>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Student Name" variant="outlined" fullWidth
      value={name} 
      onChange={(e)=>setName(e.target.value)}
      />
      <TextField id="outlined-basic" label="Student Adress" variant="outlined" fullWidth 
      value={adress}
      onChange={(e)=>setAdress(e.target.value)}/>

     <Button variant="contained" color="secondary" onClick={handleClick}>

  Submit
</Button>
{name}
     {adress}
    </Box>
    </Paper>
    </Container>
  );
}
