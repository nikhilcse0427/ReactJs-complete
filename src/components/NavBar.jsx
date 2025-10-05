import { useState, useEffect, useContext } from "react"
import {Link} from "react-router-dom"
import Men from "./Men"
import Women from "./Women"
import Kid from "./Kid"
import Login from "./Login"
import UserContext from "../utils/UserContext"

const NavBar = ()=>{
  // let theme = "Light"  This will not work because React does not understand what is let or theme
  const [theme, setTheme] = useState("Light")
  /**we are using const, whose value cannot change, then we are also changing its value and it is working completely fine why? here update does not happen in theme it create instance of theme and the assign value */
  console.log("Navbar rendered")


  //1. []->empty erray dependecy -> only once called when navbar load
  //2. No array dependency jab navbar render hoga tab tab useEffect bhi render hoga
  //3. arr dependecy -> jab dependency change ho rha hai tabhi useEffect render hoga + load ke time render hoga
  useEffect(()=>{
    console.log("useEffect render")
  },[])

  const user = useContext(UserContext)
  console.log("USER: ", user)

  return(
    <>
    <div className="flex justify-between px-10 pr-20 p-4 bg-amber-100">
      <h1 className="text-2xl font-bold"><Link to="/" style={{fontSize: "30px", textDecoration: "none", color: "black"}}>UrbanKart🛍️</Link></h1>
      <ul className="flex gap-4">
        <li><Link to="/memo">MEMO</Link></li>
        <li><Link to="/men">MEN</Link></li>
        <li><Link to="/women">WOMEN</Link></li>
        <li><Link to="/kid">KIDS</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/groceries">GROCERIES</Link></li>
        <li><Link to="/kid">{user.name}</Link></li>
        {/* <li><Link to="#">CART</Link></li> */}
        <li><Link to="/login"><button className="h-8 px-2 p-1 bg-blue-500 text-white font-bold text-md rounded-md">Login</button></Link></li>
        <button
  style={{
    width: "65px",
    fontWeight: "bold",
    marginBottom: "5px",
    border: "1px solid black",
    color: theme === "Light" ? "black" : "white",
    backgroundColor: theme === "Dark" ? "black" : "white",
    borderRadius: "5px"
  }}
  onClick={() => {
    theme === "Light" ? setTheme("Dark") : setTheme("Light");
  }}
>
  {theme}
</button>

        
      </ul>
         
      {/* button should not be inside any ul it should have sepearate div industry practice
      {} → JSX me JS expression ko indicate karta hai
      {{ color: "red", fontSize: "20px" }} → ek JS object jo style properties ko define karta hai
      */}
    </div>
    <hr className="mt-0"/>
    </>
  )
}
//default export type
export default NavBar