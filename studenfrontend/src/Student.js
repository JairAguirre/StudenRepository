import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button} from '@mui/material';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
              
      },
    },
  }));
  
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

    useEffect(()=>{
        fetch("http://localhost:8080/student/getAll")
        .then(res=>res.json())
        .then((result)=>{
          setStudents(result);
        }
      )
      },[])
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
    </Box>
    </Paper>
    <h1>Students</h1>

    <Paper elevation={3} style={paperStyle}>

      {students.map(student=>(
        <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
         Id:{student.id}<br/>
         Name:{student.name}<br/>
         Address:{student.adress}

        </Paper>
      ))
}



    </Paper>
    </Container>
  );
}
