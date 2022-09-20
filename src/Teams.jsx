import { React, Component } from "react";

import Slider from "react-slick";
import './style.css'
import pic from './images/hpi2.jpg'
import pic1 from './images/hpi3.webp'
import pic2 from './images/hpi4.webp'
import Teaminfo from "./Teaminfo";
import Teamprofile from "./Teamprofile";




const Teams = () => {
   
        return (
            
            <div style={{ paddingTop: '50px'}}>
               
               
                 <Teaminfo />
                 <Teamprofile />
            </div>
            
        )
}
    
     
    export default Teams;