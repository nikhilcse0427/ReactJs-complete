import React from "react"
import Skelleton from "./Skelleton";
import UserContext from "../utils/UserContext";
// github profile api https://api.github.com/users/nikhilcse0427
class ProfileClass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      count1:0,
      count2:0,
      userProfile: null
    }

    console.log("child contstructor is called")
  }

  async componentDidMount(){
    console.log("child mount is called")
    let data = await fetch("https://api.github.com/users/nikhilcse0427")//fetch and json promise return karata hai
    let resData = await data.json()
    console.log("JsonData: ",resData)
    this.setState({
      userProfile : resData
    })
    {/**We used this.timer here this keyword  not const because const id block scoped and this key word allow all menthod to access variable inside class */}
     this.timer = setInterval(()=>{
      console.log("ReactJs complete")
    }, 1000)
  }

  componentDidUpdate(prevProps, prevState){
    console.log("component did update")
    if(this.state.count1 != prevState.count1 || this.state.count2 != prevState.count2){
      console.log("componentDidUpdate render after state update")
    }
  }

  /**This will come when we leave this page nest  */
  componentWillUnmount(){
    console.log("component will unmount")
    //CLEANUP -> THOSE THING WHICH ARE NOT IN USED REMOVE IT
    clearInterval(this.timer)
  }
  
  render(){
    // const {name, age, email, city, state, nationality} = this.props.aboutUser
    const {userProfile} = this.state
    console.log("child reder is called")

    //conditional rendering
    if(userProfile==null){
      return <Skelleton />
    }
    const {login, name, email, location, bio, avatar_url} = userProfile

    return(
    <div style={{display: "flex",  alignItems: "center",flexDirection: "column", height: "550px", width: "280px", border: "1px solid black", margin: "40px", padding: " 20px", textAlign: "center", borderRadius: "4px"}}>
      <img src={avatar_url} alt="avatar" style={{height:"150px",width: "150px", borderRadius: "50%"}} />
      <h2 style={{textAlign: "center", color: "blue", textDecoration: "underline"}}>Github Profile</h2>
        <UserContext.Consumer>
          {(data)=>(
            <h1>userName: {data.name}</h1>
          )}
        </UserContext.Consumer>

      <h2>Name: <span style={{fontWeight:"normal", fontSize:"18px"}}>{name}</span></h2>
      <h2>Email: <span style={{fontWeight:"normal", fontSize:"18px"}}>{email || "Not Available"}</span></h2>
      {/* github often return null for email*/ }
      <h2>Location: {location}</h2>
      <h2 style={{textAlign: "center"}}>BIO: <p style={{fontWeight:"normal", fontSize:"18px"}}>{bio}</p></h2>
    </div>
      
    )
  }
}

export default ProfileClass
