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
import { Link } from 'react-router-dom'
import { HOF } from './Product'
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
    const timer = setInterval(()=>{
      console.log("useEffect render")
    }, 1000)
    return ()=>(
      clearInterval(timer)
    )
  }, [])

  const fetchData = async () => {
    const resultData = await fetch("https://fakestoreapi.com/products")
    const jsonData = await resultData.json()
    setProdList(jsonData)
    setFilteredList(jsonData)
  }

  const HOFComponent = HOF(Product)//This HOF is higher order component

  // if(prodList.length===0){
  //   return <Skelleton />
  // }

  return prodList.length === 0 ? <Skelleton /> : (
    <>
    <div className='flex gap-5 ml-8 pt-5'>
      <div className="search-box flex">
        <input className="border-l border-b border-t h-10 w-60  rounded-l-sm pl-2" placeholder="search product..." onChange={(e) =>
          setSeachText(e.target.value)}
          value={searchText} />
          <div className="h-10">
        <button className="bg-blue-400 w-20 h-10 border-l-0 rounded-r-sm  text-white font-bold" onClick={() => {
          const filteredProd = prodList.filter((product) => {
            return product.title.toLowerCase().includes(searchText.toLowerCase()) // function is itself javascript code so we are not using curly braces and here == comparision operator will not work
          })
          console.log(filteredProd);
          setFilteredList(filteredProd)
        }}>search</button>
      </div>

      <div style={{ marginLeft: "30px",}}>
        <button className="h-10" onClick={() => {
          const filteredList = prodList.filter((product) => {
            return product.rating.rate > 4
          })
          setFilteredList(filteredList)
        }} style={{ padding: "5px", backgroundColor: "#2D2D34", color: "white", fontWeight: "bold", borderRadius: '5px' }}>Top Rated Product</button>
      </div>
     
      </div>
      </div>
      <div className="product-card">
      {filteredList.map((product) => (
        <Link
          key={product.id}
          to={`/products/${product.id}`}
          style={{ color: "black", textDecoration: "none" }}
        >
          {product.rating.rate >= 4 ? (
            <HOFComponent products={product} />
          ) : (
            <Product products={product} />
          )}
        </Link>
      ))}
    </div>
    </>
  )
}

export default ProductCard





