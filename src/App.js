import React from "react";
import Weather from "./components/weather";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'


const  API_Key = '6e6834d13fb6dcae8012757a6b54b2e4'
function App() {
  return (
  <div className="App">
   <Weather />
  </div>
  );
}

export default App;
