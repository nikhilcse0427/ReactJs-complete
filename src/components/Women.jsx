import React from 'react'
import ComponentA from './ComponentA'
const Women = () => {
  const userData = {
    name: "Nikhil Verma",
    age: 22,
    address: "Shivnarayanpur, Bhagalpur, Bihar",
    nationality: "India"
  }
  return (
    <div className="flex justify-center h-screen w-screen">
      <ComponentA userData={userData} />
    </div>
  )
}

export default Women
