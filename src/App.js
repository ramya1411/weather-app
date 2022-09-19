import './App.css';
import {useState} from "react"
import axios from "axios"

function App() {
  const [InputCity, setInputCity] = useState("")

  const[data,setData] = useState({})
  
  const apikey = "0d3cb2e4cdbe606075486ad60da1e9e0"
  
  const getDetails = (Cityname) => {
    if (!Cityname) return
    
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + Cityname + "&appid=" + apikey
    axios.get(apiURL).then((res) => {
      console.log("response",res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err",err)
    })
  }
  
  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }
  
  const handlesearch = () => {
    getDetails (InputCity)
  }

  return (
    <div className="App">
      <div className='whole'>
      <h1>Weather app</h1>
      <div className='pt'>
        <input type="text" color='whitesmoke' className="inp" placeholder='Enter a city name' onChange={handleChangeInput}/>
        <button value={InputCity} onClick={handlesearch}>Search</button>
      </div>
      <img src="https://i.pinimg.com/originals/a0/e2/83/a0e28308aec61e34cd8a60daa918c9fc.png" alt="Weather icon"/>
      {Object.keys(data).length > 0 &&
      <>
        <div className='city'>{data?.name}</div>
        <div className='temperature'>{((data?.main?.temp) - 273.15).toFixed(1)}°C</div>
      </>
      }  
      </div> 
    </div>
  );
}
export default App;
