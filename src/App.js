import './App.css';
import {useState} from "react";
import axios from "axios";
function App() {
    console.log("Reneering")
    const [location, setLocation] = useState('')
    const [data,setData]= useState({})
    const key = "e2e0cf277041c11677361ca2adc57693"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`;
    const searchLocation = async (event)=>{
       if(event.key == 'Enter'){
           let response = await axios.get(url)
           console.log(response.data)
           setData(response.data)
           setLocation('')
       }

    }
//console.log("data",data)
  return (
    <div className="app">
     <div className="Search">
         <input
             value={location}
             onChange={event => setLocation(event.target.value)}
             onKeyPress={searchLocation}
             placeholder='Enter Location'
             type="text" />
     </div>
        {data.main ?  <div className={"container"}>
            <div className={"top"}>
                <div className={'location'}>
                    <p>{data.name}</p>
                </div>
                <div className={'temp'}>
                    <h1>{data.main.temp.toFixed()}°C</h1>
                </div>
                <div className={'description'}>
                    <p>{data.weather[0].main}</p>
                </div>
            </div>
            <div className={"buttom"}>
                <div className={'bold'}>
                    <p>{data.main.feels_like.toFixed()}°C</p>
                    <p>Feels Like</p>
                </div>
                <div className={'bold'}>
                    <p>{data.main.humidity}%</p>
                    <p>Humidity</p>
                </div>
                <div className={'bold'}>
                    <p>{data.wind.speed}MPH</p>
                    <p>Wind Speed</p>
                </div>
            </div>
        </div> : null}

    </div>
  );
}

export default App;
