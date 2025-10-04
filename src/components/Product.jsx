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
    <div className="product-box hover: bg-blue-50">
      <img src={image} className="mt-6 m-4 in-hover:"></img>
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
            padding: "5px",
            borderRadius: "4px",
          }}
        >
          Best Seller
        </button>
        <Product {...props} />
      </div>
    )
  }
}