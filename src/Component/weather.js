import React from 'react'
import './weather.css';
 const Weather = (props) => {
  return (
   
    <div className="box-content">
           
      <div className='box'>  {
          props.temperature && <div className="boxing">
               <div className="left">
               <span>{props.city}, </span> 
               <span> {props.country}</span>
               <br/>
               <i class="fa-solid fa-cloud-moon"></i>
               <br/>
               <span>borken coulds</span>
               </div>
               <div className="right">
               <span>{Math.floor( props.temperature - 273.144)} C</span>
               </div>
          </div>
        }</div>

      <div className='card'> 
      <div>
      {
          props.temperature && <p> <i class="fa-solid fa-arrow-down"> </i> temperature <br/> <span>{Math.floor( props.temperature - 273.144)} C</span></p>
        }
        </div>
         </div>
         <div className='card'>
         <div>{
          props.city && <p> <i class="fa-solid fa-city"></i> city <br/> <span>{props.city}</span></p>
        }
         </div>
         </div>
        <div className='card'>
        <div> {
          props.country && <p><i class="fa-solid fa-flag"></i> country <br/> <span>{props.country}</span></p>
        }
         </div>
         </div>
        <div className='card'>
        <div> {
          props.humidity && <p><i class="fa-solid fa-temperature-quarter"></i> humidity <br/> <span>{props.humidity}</span></p>
        }
         </div>
         </div>
        <div className='card'>
        <div>  {
          props.description && <p><i class="fa-solid fa-audio-description"></i> description <br/> <span>{props.description}</span></p>
        }
         </div>
         </div>
         
         <div className='card'> 
         <div> {
          props.description && <p><i class="fa-solid fa-arrow-up-short-wide"></i> wind speed <br/> <span>6 m/h</span></p>
        }</div>
         </div>
        <div className="message">{
          props.error && <p>{props.error}</p>
          
        } </div>
    </div >
  )
} 

export default Weather;