import React from "react"
import Skelleton from "./Skelleton";
// github profile api https://api.github.com/users/nikhilcse0427
class ProfileClass extends React.Component{
  constructor(props){
    super(props);
    this.state={
      // count1:0,
      // count2:0,
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
  }

  componentDidUpdate(){
    console.log("component did update")
  }

  /**This will come when we leave this page nest  */
  componentWillUnmount(){
    console.log("component will unmount")
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
    <div style={{height: "550px", width: "280px", border: "1px solid black", margin: "40px", padding: " 20px", textAlign: "center"}}>
      <img src={avatar_url} alt="avatar" style={{height:"150px"}} />
      <h2 style={{textAlign: "center", color: "blue", textDecoration: "underline"}}>Github Profile</h2>
      <h2>userName: <span style={{fontWeight:"normal", fontSize:"18px"}}>{login}</span></h2>
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
