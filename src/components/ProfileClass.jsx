import React from "react"

class ProfileClass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  render(){
    const {name, age, email, city, state, nationality} = this.props.aboutUser
    return (
      <div style={{height: "450px", width: "350px", border: "1px solid black", margin: "40px", padding: " 20px"}}>
      <h2 style={{textAlign: "center", color: "blue", textDecoration: "underline"}}>Class Based Component</h2>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
      <h3>Email: {email}</h3>
      <h3>City: {city}</h3>
      <h3>State: {state}</h3>
      <h3>Nationality: {nationality}</h3>
      <h2>{this.state.count}</h2>
      <button onClick={()=>{
        // this.state.count = this.state.count+1
        // we cannot update state directly
        this.setState({
          count: this.state.count+1
        })
      }}>Increment</button>
    </div>
      
    )
  }
}

export default ProfileClass
