// const ProductCard = ()=>{
//   // const {title, price, rating} = props //destructuring
//   return(
//     <div className="product-card">
//       <Product title="T-Shirt" rating="4.5" price="Rs.120" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYyqFhQdWBOHc8TIjIm3C16TyT9sAcjzwYg&s"/>
//       <Product title="Pant" rating="4.7" price="Rs.140" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjK9L91lKWfhCq519aMARav5zlRjz2SlQRdQ&s"/>
//       <Product title="Shirt" rating="4.8" price="Rs.180" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8aWRPt3C3shZzZcQ-cuMo7EhTrTZlCGc5lg&s"/>

//       {/* <Product />
//       {Product("Tshirt")} we cancall component like this */}

//     </div>
//   )
// }

// const Product = (props)=>{
// const {title, price, rating} = props //destructuring
//   console.log(props)
//   return(
//     <div className="product-box">
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFYyqFhQdWBOHc8TIjIm3C16TyT9sAcjzwYg&s"></img>
//       <p style={{fontWeight: "bold"}}>{props.title}</p>
//       <p>Rating: {props.rating}</p>
//       <p>Price: {props/price}</p>
//     </div>
//   )
// }

import { useEffect, useState } from 'react'
// import {productList} from '../utils/constants.js'
import Product from "./Product"
import Skelleton from './Skelleton.jsx'
//name export type  {export const ProductCard}
const ProductCard = () => {
  const [prodList, setProdList] = useState([])
  const [filteredList, setFilteredList] = useState([])
  const [searchText, setSeachText] = useState("")

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const resultData = await fetch("https://fakestoreapi.com/products")
    const jsonData = await resultData.json()
    setProdList(jsonData)
    setFilteredList(jsonData)
  }

  // if(prodList.length===0){
  //   return <Skelleton />
  // }

  return prodList.length === 0 ? <Skelleton /> : (
    <>
      <div className="search-box">
        <input type="text" placeholder="search product..." onChange={(e) =>
          setSeachText(e.target.value)}
          value={searchText} />
        <button onClick={() => {
          const filteredProd = prodList.filter((product) => {
            return product.title.toLowerCase().includes(searchText.toLowerCase()) // function is itself javascript code so we are not using curly braces and here == comparision operator will not work
          })
          console.log(filteredProd);
          setFilteredList(filteredProd)
        }}>search</button>
      </div>

      <div style={{ marginLeft: "30px", marginTop: "10px" }}>
        <button onClick={() => {
          const filteredList = prodList.filter((product) => {
            return product.rating.rate > 4
          })
          setFilteredList(filteredList)
        }} style={{ padding: "5px", backgroundColor: "#2D2D34", color: "white", fontWeight: "bold", borderRadius: '5px' }}>Top Rated Product</button>
      </div>
      <div className="product-card">
        {filteredList.map((product, index) => (
          <Product products={product} key={index} />
        ))}
      </div>
    </>
  )
}

export default ProductCard





