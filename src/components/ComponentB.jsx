import React from 'react'

const ComponentB = ({userData}) => {
  const {name, age, address, nationality} = userData
  return (
    <div>
      <div className="h-40 w-80 border-black border-2 mt-20 bg-[#4a4a4a] rounded-md font-bold text-white p-5">
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Adress: {address}</li>
          <li>Nationality: {nationality}</li>
        </ul>
      </div>
    </div>
  )
}

export default ComponentB
