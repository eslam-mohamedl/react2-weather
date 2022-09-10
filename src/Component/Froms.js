import React from 'react'
import './Froms.css';
 const Froms = (props) => {
  return (
   
        <form onSubmit={props.getWeather}>
            <input type="text" placeholder='enter city...' name="city"/>
            <input type="text" placeholder='enter country...'  name="country"/>
             <button>get  <i className="fa-solid fa-cloud-moon"></i></button>
        </form>
  )
}
export default Froms;
