import axios from "axios";


const URL ='https://api.openweathermap.org/data/2.5/weather';
const API_Key = 'bd4ec1aedca6f0310ff7da73b1c88c0b';

const getData = async(city,country) =>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_Key}&units=metric`)
}
export default getData;