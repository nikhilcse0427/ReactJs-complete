import React from 'react'
import { useRouteError } from 'react-router'
const Error = () => {
  const err = useRouteError()//return object
  console.log(err)
  return (
    <div style={{display: "flex", justifyContent: "center",flexDirection: "column", alignItems: "center", fontWeight: "bold"}}>
  <h1>!OOPS Something went wrong</h1>
  <h2>{err.status}</h2>
  <h2>{err.statusText}</h2>
</div>

  )
}

export default Error



