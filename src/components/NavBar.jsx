import { useState, useEffect } from "react"
import {Link} from "react-router-dom"
import Men from "./Men"
import Women from "./Women"
import Kid from "./Kid"

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

  return(
    <div className="navbar">
      <h1><Link to="/" style={{fontSize: "30px", textDecoration: "none", color: "black"}}>UrbanKart🛍️</Link></h1>
      <ul className="menu_items">
        <li><Link to="/men" className="nav-link">Men</Link></li>
        <li><Link to="/women" className="nav-link">Women</Link></li>
        <li><Link to="/kid" className="nav-link">Kids</Link></li>
        <li><Link to="#" className="nav-link">Cart</Link></li>
        <button style={{width: "65px", fontWeight: "bold", color:theme==="Light"?"black":"white",backgroundColor: theme==="Dark"?"black":"white", borderRadius: "5px"}} onClick={()=>{
          theme === "Light"?setTheme("Dark"):setTheme("Light")
        }}>{theme}</button>
      </ul>
         
      {/* button should not be inside any ul it should have sepearate div industry practice
      {} → JSX me JS expression ko indicate karta hai
      {{ color: "red", fontSize: "20px" }} → ek JS object jo style properties ko define karta hai
      */}
    </div>
  )
}
//default export type
export default NavBar