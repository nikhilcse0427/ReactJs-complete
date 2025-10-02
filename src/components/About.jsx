import React from 'react'
import Profile from './Profile'
import ProfileClass from './ProfileClass'

const userProfile = {
  name: "Nikhil Verma",
  age: 22,
  email: "abc@gmail.com",
  city: "Bhagalpur",
  state: "Bihar",
  nationality: "Indian"
}
const About = () => {
  return (
    <>
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Profile aboutUser={userProfile}/>
      <ProfileClass aboutUser={userProfile}/>
    </div>
    </>
  )
}

export default About
