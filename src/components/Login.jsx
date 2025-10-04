import React, { useState } from 'react'
import { z } from "zod"

// ✅ Define schema with Zod
const loginSchema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
})

const Login = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: ""
  })
  const [errors, setErrors] = useState({})

  const changeHandler = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form Submitted ✅", formData)

    const result = loginSchema.safeParse(formData)

    if (!result.success) {
      // Using flatten for easy error object
      const { fieldErrors } = result.error.flatten()
      setErrors(fieldErrors)
      return
    }

    // ✅ No errors → proceed
    setErrors({})
    console.log("Validation Passed 🚀", result.data)
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-96 w-96 border border-black shadow-2xl rounded-md p-6 bg-white">
        <form onSubmit={submitHandler} className="flex flex-col gap-4">

          <div className="flex flex-col">
            <label htmlFor="userName" className="font-semibold">Username</label>
            <input
              type="text"
              id="userName"
              name="userName"
              value={formData.userName}
              onChange={changeHandler}
              className="border border-gray-400 rounded-md p-2"
              placeholder="Enter your username..."
            />
            {errors.userName && <p className="text-red-500 text-sm">{errors.userName[0]}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={changeHandler}
              className="border border-gray-400 rounded-md p-2"
              placeholder="Enter your email..."
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email[0]}</p>}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={changeHandler}
              className="border border-gray-400 rounded-md p-2"
              placeholder="Enter your password..."
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password[0]}</p>}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
