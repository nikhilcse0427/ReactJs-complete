import React, { useContext } from 'react'
import UserContext from '../utils/UserContext'

const ComponentB = ({userData}) => {
  const {name, age, address, nationality} = userData
  const user = useContext(UserContext)
  return (
    <div className='flex gap-8'>
      <div className="h-50 w-80 border-black border-2 mt-20 bg-[#4a4a4a] rounded-md font-bold text-white p-5">
        <h2 className="text-blue-400 text-center" text-center>Prop Drilling taking place</h2>
        <ul>
          <li>Name: {name}</li>
          <li>Age: {age}</li>
          <li>Adress: {address}</li>
          <li>Nationality: {nationality}</li>
        </ul>
      </div>
      <div className="h-50 w-80 border-black border-2 mt-20 bg-[#4a4a4a] rounded-md font-bold text-white p-5">
         <h2 className="text-blue-400 text-center" text-center>Context API</h2>
        <ul>
          <li>Name: {user.name}</li>
          <li>Adress: {user.address}</li>
        </ul>
      </div>
    </div>
  )
}

export default ComponentB
