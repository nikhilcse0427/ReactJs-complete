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


const Product = ({products})=>{
  const {title, image, rating, price} = products
  console.log("TITLE: ", title)
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


// const NewComp = ()=>{
//   return (
//     <div>

//     </div>
//   )
// }

export const HOF = (Product)=>{
  return (props)=>{
    return(
      <div style={{position: "relative"}}>
        <button
          style={{
            position: "absolute",
            color: "white",
            backgroundColor: "black",
            fontWeight: "bold",
          }}
        >
          Best Seller
        </button>
        <Product {...props} />
      </div>
    )
  }
}