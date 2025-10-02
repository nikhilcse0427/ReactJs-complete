import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Skelleton from './Skelleton'

const ProductDetails = () => {
  const [singleProduct, setSingleProduct] = useState(null)
  const { productId } = useParams()

  useEffect(() => {
    fetchData()
  }, [productId]) // 👈 re-run if productId changes

  const fetchData = async () => {
    const responseData = await fetch(`https://fakestoreapi.com/products/${productId}`)
    const jsonRes = await responseData.json();
    setSingleProduct(jsonRes)
  }

  if (singleProduct==null) {
    return <h2>Loading product...</h2> // 👈 loader before product loads
  }

  const { image, description, price, title } = singleProduct

  return singleProduct==null?<Skelleton />:(
    <div className="container" style={{ display: "flex", gap: "20px", padding: "20px" }}>
      <div className="left-content">
        <img src={image} alt={title} width="200" />
      </div>
      <div className="right-content">
        <h2>{title}</h2>
        <p>{description}</p>
        <h3>Price: ${price}</h3>
      </div>
    </div>
  )
}

export default ProductDetails
