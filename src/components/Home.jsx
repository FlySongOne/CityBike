import React, { Component } from 'react';
import BikeRider from '../imgs/bike-rider.jpg';
import Nicescene from '../imgs/nicescene.jpg';

class Home extends Component {

  render() {
    return (

      <div id="home">
      <hr></hr>
         <div className='center'>
           <div className='textCenter'>
              <h1>Bike like a New Yorker.</h1>
           </div>
         </div>
         <div className="secondPart">
         <h2>An affordable and healthy way to commute </h2>
         <div id='photos'>
            <img src={BikeRider} className="left" alt="rider" />

            <img src={Nicescene} className="right" alt="scene" />
         </div>

         </div>

         <div className='thirdPart'>
           <h2>How City Bike works</h2>
           <div className='row'>
           <div className='cell'>
             <h3>1. Choose a bike at one of eight hundreds of stations around NYC.
             See bike availability on the Station Map.</h3>
           </div>
           <div className='cell'>
           <h3>2. Ride as many as you want while your pass is active.
           Day Passes include unlimited 30-min rides and Annual Memberships include unlimited 45-min rides.</h3>
           </div>
           <div className='cell'>
           <h3>3. End a ride by returning your bike to any station. Slide your bike firmly into an empty dock and wait for the green light to make sure it's locked.</h3>
           </div>
           </div>
         </div>
      </div>
    );
  }
}
export default Home;
