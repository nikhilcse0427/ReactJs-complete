import React from 'react'
import ComponentB from './ComponentB'
const ComponentA = ({userData}) => {
  return (
    <div>
      <ComponentB userData={userData} />
    </div>
  )
}

export default ComponentA
