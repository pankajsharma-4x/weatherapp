import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import getData  from "./service/api";
import Information from "./Information"


const useStyles = makeStyles({
    component:{
     padding: 10,
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'space-between'
    },
    input:{
        color :'#fff',
        marginRight : 15
    },
    button:{
        width:150,
        height:40,
        color:'#fff',
        marginTop: 5,
        '&:hover': {
            backgroundColor: 'green',
          },
    }
})
const Form = () =>{
    const classes =useStyles();

     const [data,getWeatherData] = useState();
     const [city,setCity] = useState('Rishikesh')
     const [country,setCountry] = useState('India')
     const [click ,handleClick] = useState(false)

    useEffect(() =>{
        const getWeather = async() =>{
    city && await getData(city,country).then(response => {
        getWeatherData(response.data)
        console.log(response.data)
    })
}
getWeather();
handleClick(false);
    },[click]);

    const handleCityChange =(value) =>{
     setCity(value);
    }
    const handleCountryChange =(value) =>{
        setCountry(value);
       }

    return(
        <>
          <Box className={classes.component}>
          <TextField 
          inputProps={{className:classes.input}} 
          onChange ={(e) => handleCityChange(e.target.value)}
          className={classes.input} 
          id="standard-basic" 
          label="City" 
          variant="standard" />

          <TextField 
          inputProps={{className:classes.input}} 
          onChange ={(e) => handleCountryChange(e.target.value)} 
          className={classes.input} 
          id="standard-basic" 
          label="Country" 
          variant="standard" />

          <Button 
          className={classes.button} 
          variant="contained"
          color="secondary"
          onClick= {() => handleClick(true)}
           >
          Get Weather</Button>
          </Box>
          <Information data = {data}/>
        </>
    )
}
export default  Form;