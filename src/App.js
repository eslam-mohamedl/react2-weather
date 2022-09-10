import './App.css';
import React, { Component } from  'react';
import Froms from './Component/Froms';
import Weather from './Component/weather';
const AIP_key ="0b01229a14dab6d721b2c2ce6b9ef0ae";
const AIP_two ="e36ed364400282e43250b6c4c0274d44";


class App extends Component {
  state = {
    temperature : '',
    city : '',
    country: '',
    humidity : '',
    description : '',
    error : ''
  }


  getWeather = async (e)=> {
    e.preventDefault();
   const city = e.target.elements.city.value;
   const country = e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}%2C${country}&appid=${AIP_two}`);
    const data= await api.json();
    console.log(data);
    if( city && country) {
      this.setState({
        temperature:data.main.temp,
        city:data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description: data.weather[0].description,
        error:''
      })
    
    }
    else{
      this.setState({
        temperature : '',
        city : '',
        country: '',
        humidity : '',
        description : '',
        error : 'please Enter Data'
        
      })
    }

  }
 render(){ 
   return (
  <div className="App">
    <div className="overlay">
      <div className="box-container">
    <Froms getWeather={this.getWeather}/>
    <Weather
      temperature= {this.state.temperature}
      city= {this.state.city}
      country= {this.state.country}
      humidity= {this.state.humidity}
      description= {this.state.description}
      error= {this.state.error}
    />
 </div>
 </div>
 </div>
);
 }

}

export default App;
