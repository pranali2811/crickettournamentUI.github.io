import { React, Component } from "react";
import Slider from "react-slick";
import './style.css'
import pic from './images/hpi2.jpg'
import pic1 from './images/hpi3.webp'
import pic2 from './images/hpi4.webp'
import Img1 from './images/hpi5.webp'
import Img3 from './images/hpi6.webp'
import Img4 from './images/hpi7.webp'
import team from './images/teams.webp'



const Home = () => {
   
        return (
            
            <div style={{ paddingTop: '70px'}}>
               
                 <img src={ pic } style={{width: '1500px', height: '600px', borderRadius:'200px'}}/> 

                 <div class="col  mb-2" style={{display: 'flex', flexDirection: 'row', marginTop: '50px', paddingTop: '10px',paddingBottom: '10px', backgroundColor: '#ff8a65'}}>

                    <div >
                        <img class="inner-img" src={ pic1 } style={{width: '450px', height: '290px', marginLeft: '10px', borderRadius: '20px'}}/>
                        &nbsp;
                        <img class="inner-img" src={ Img1 } align="right" style={{width: '450px', height: '300px', marginLeft: '10px', borderRadius: '20px'}}/>

                    </div>

                    <div style={{ marginTop: '10%' }}>
                        <img class="inner-img" src={ pic2 } align="right" style={{width: '500px', height: '300px', marginLeft: '10px', marginRight: '10px',  borderRadius: '20px'}}/>
                    </div>

                    <div >
                    <img class="inner-img" src={ Img3 } style={{width: '450px', height: '290px', marginRight: '10px', borderRadius: '20px'}}/>
                        &nbsp;
                        <img class="inner-img" src={ Img4 } align="right" style={{width: '450px', height: '300px', marginRight: '10px', borderRadius: '20px'}}/>
                    </div>

                 </div>
                
                
                
                <br />
                <br />
                
                <br />

                
               <br />
               <br />
                
            </div>
            
        )
}
    
     
    export default Home;