import React from 'react'
import About from './About'

const Profile = (props) => {
  console.log("ABOUT USER: ",props.aboutUser)
  const { name, age, email, city, state, nationality } = props.aboutUser
 //props is object inside aboutUser is object
  return (
    <div style={{height: "450px", width: "350px", border: "1px solid black", margin: "40px", padding: " 20px"}}>
      <h2 style={{textAlign: "center", color: "blue", textDecoration: "underline"}}>Functional Component</h2>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Email: {email}</h3>
      <h3>City: {city}</h3>
      <h3>State: {state}</h3>
      <h3>Nationality: {nationality}</h3>
    </div>
  )
}

export default Profile
