import React , {useState,useEffect} from 'react';
import './weather.css';


const Weather = () =>{
    let api_key="f27c28d5c160c77e8f59eaa69a0caae7";
    let search = async() =>{
            let element = document.getElementsByClassName("CityInput")
            console.log('sumona');
            if(element[0].value===""){
                return 0;
            }
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
            let response=await fetch(url);
            let data= await response.json();
            console.log(data);
            const humidity=document.getElementsByClassName("humidity-percent");
            const wind=document.getElementsByClassName('wind-rate');
            const temperature = document.getElementsByClassName('weather-temp');
            const location=document.getElementsByClassName('weather-location');
            humidity[0].innerHTML=data.main.humidity+"%";
            wind[0].innerHTML=data.wind.speed+"km/h";
            temperature[0].innerHTML=data.main.temp+'c';
            location[0].innerHTML=data.name;
            console.log( location[0].innerHTML);
        }

    return(
        <div className="container">
            <div className='top-bar'>
                 <input className='CityInput' type='text' placeholder='Write the city name' />
                 <div  onClick={()=>search()}className='search-icon'>
                 <i  class="bi bi-search"/>
                 </div>
            </div>
            <div className='weather-image'>
            <i class="bi bi-cloud-sun"></i>
            </div>
            <div className='weather-temp'>
            24C
            </div>
            <div className='weather-location'>
             London
            </div>
            <div className='data-container'>  
                <div className='element'>
                    <div className='icon'>
                    <i class="bi bi-grid-3x3-gap"/>
                    </div>
                
                    <div className='data'>
                        <div className='humidity-percent'>
                           
                        </div>
                        <div className='text'>
                             Humidity
                        </div>
                        
                    </div>
                </div>
                <div className='element'>
                    {/* aikhane wind ar akta logo bosbe */}
                    <div className='data'>
                        <div className='wind-rate'>18km/h</div>
                        <div className='text'>wind speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Weather;