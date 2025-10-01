import React from "react"
import ReactDOM from "react-dom/client"
import NavBar from "./components/NavBar"
import ProductCard from "./components/ProductCard"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Men from "./components/Men"
import Women from "./components/Women"
import Kid from "./components/Kid"
import Error from "./components/Error"
import { useRouteError } from "react-router-dom"

const Home = () => (
   <div>
      <NavBar />
      <Outlet />
   </div>
)

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <Error />,
      children: [
         {
            path: '/',
            element: <ProductCard />
         },
         { 
            path: '/men',
            element: <Men />
         },
         {  
            path: '/women',
            element: <Women />
         },
         { 
            path: '/kid',
            element: <Kid />
         },
      ]
   }
   
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)