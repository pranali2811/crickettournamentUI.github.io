import { React, Component } from "react";
import HomePageSlider from "./homepageslider";
import Slider from "react-slick";
import './style.css'
import pic from './images/hpi2.jpg'
import pic1 from './images/hpi3.webp'
import pic2 from './images/hpi4.webp'



const Home = () => {
   
        return (
            
            <div style={{ paddingTop: '50px'}}>
               
                 <img src={ pic } style={{width: '1440px', height: '600px', paddingLeft: '30px', paddingTop: '20px'}}/> 
                
                {/* <div class="img-wrapper">
                    
                </div>
                <div class="img-wrapper">  
                    
                </div> */}
                <div>
                    <img class="inner-img" src={ pic1 } style={{width: '500px', height: '300px', paddingLeft: '30px'}}/>
                    {/* <img class="inner-img" src={ pic2 } align="right"/> */}
                </div>
                <HomePageSlider />
                
            </div>
            
        )
}
    
     
    export default Home;