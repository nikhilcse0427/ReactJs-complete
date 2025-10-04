import React from 'react'
import { useState } from 'react'
import Accordian from './Accordian'
const Men = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className="mt-10 ml-35">
      <h1 className="font-bold text-xl">Filter option🔍</h1>
      <div className="">
        {["Gender", "Category", "Price"].map((filterOption, index) => {
          return <Accordian open={index===open?true:false} key={index} option={filterOption}
          setOpen={()=>{
            setOpen(index)
          }}/>
        })}
      </div>
    </div>
  )
}

export default Men
