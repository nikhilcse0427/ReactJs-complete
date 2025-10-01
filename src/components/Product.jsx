// const Product = ({title, img, rating, price})=>{
//   return(
//     <div className="product-box">
//       <img src={img}></img>
//       <p style={{fontWeight: "bold"}}>{title}</p>
//       <p>Rating: {rating}</p>
//       <p>Price: {price}</p>
//     </div>
//   )
// }


import ProductCard from "./ProductCard"
const Product = ({products})=>{
  const {title, image, rating, price} = products
  return(
    <div className="product-box">
      <img src={image}></img>
      <p style={{fontWeight: "bold"}}>{title}</p>
      <p>Rating: {rating.rate}</p>
      <p>Price: {price}</p>
    </div>
  )
}

export default Product