// import React from 'react'
// import Profile from './Profile'
// import ProfileClass from './ProfileClass'

// const userProfile = {
//   name: "Nikhil Verma",
//   age: 22,
//   email: "abc@gmail.com",
//   city: "Bhagalpur",
//   state: "Bihar",
//   nationality: "Indian"
// }
// const About = () => {
//   return (
//     <>
//     <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
//       <Profile aboutUser={userProfile}/>
//       <ProfileClass aboutUser={userProfile}/>
//     </div>
//     </>
//   )
// }

// export default About

import { Component } from 'react'
import Profile from './Profile'
import ProfileClass from './ProfileClass';
import Profile from './Profile';

class About extends Component{
  constructor(){
    super();
    console.log("parent constructor is called")
  }
  
  componentDidMount(){
    console.log("parent mount is called")
  }
  userProfile = {
  name: "Nikhil Verma",
  age: 22,
  email: "abc@gmail.com",
  city: "Bhagalpur",
  state: "Bihar",
  nationality: "Indian"
}
  render(){
    console.log("parent render is called")
    return(
      <>
      <div style={{display: "flex"}}>
        {/* <Profile aboutUser={this.userProfile}/> */}
        <ProfileClass aboutUser={this.userProfile}/>
        <ProfileClass aboutUser={this.userProfile}/>
      </div>
      </>
    )
  }
}

export default About



/**
 * REACT LIFE CYCLE:
 * parent constructor is called
 * parent render is called
 * child1 constructor is called
 * child1 render is called
 * child2 constructor is called
 * child2 render is called
 * child2 mount is called
 * child1 mount is called
 * parent mount is called
 
 NOTE: mount is paused till component  get renderd till all component is called 
 */