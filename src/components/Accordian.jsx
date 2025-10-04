import React, { useState } from 'react'
import ListItems from './listItems'

const Accordian = ({option, open,setOpen}) => {

  return (
    <div className="flex flex-col">
    <div className="rounded-md mt-5 w-75 bg-gray-50 shadow-lg max-h-56
    pl-2 border-gray-200 flex justify-between">
      <p>{option}</p>
      <button onClick={setOpen} className="w-15 h-8 text-white bg-black font-bold rounded-sm">
  Show
</button>

    </div>
    { open && <div className='ml-5'><ListItems /></div> }
    </div>
  )
}

export default Accordian
