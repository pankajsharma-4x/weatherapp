import React from "react"
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';
import Logo from "../images/weather.avif"
import Form from "./Form"
import Container from '@mui/material/Container';


const useStyles = makeStyles({
    component:{
     height : '100vh',
     display : 'flex',
     alignItems : 'center',
     width:'65%',
     margin:'0 auto'
    },
    leftContainer: {
     backgroundImage : `url(${Logo})`,
     height : '80%' , 
     width :'30%',
     backgroundSize : 'cover',
     borderRadius : '20px 0 0 20px'
    },
    rightContainer : {
    background : 'linear-gradient( 35deg,#CCFFFF,#FFCCCC)',
    height:'80%',
    width: 'auto'
    },
})

const Weather = () =>{
    const classes =useStyles();
    return(
        <Container >
       <Box className = {classes.component}>
           <Box className = {classes.leftContainer}></Box>
           <Box className = {classes.rightContainer}>
               <Form />
           </Box>
       </Box>
       </Container>
    )
       
}
export default Weather;
