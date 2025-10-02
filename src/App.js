import React from "react"
import ReactDOM from "react-dom/client"
import NavBar from "./components/NavBar"
import ProductCard from "./components/ProductCard"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Men from "./components/Men"
import Women from "./components/Women"
import Kid from "./components/Kid"
import About from "./components/About"
import Error from "./components/Error"
import { useRouteError } from "react-router-dom"
import ProductDetails from "./components/ProductDetails"

const App = () => (
   <div>
      <NavBar />
      <Outlet />
   </div>
)

export default App;

const appRouter = createBrowserRouter([
   {
      path: '/',
      element: <App />,
      children: [
          {
            index: '/', 
            element: <ProductCard />
         },
         { 
            path: 'men',
            element: <Men />
         },
         {  
            path: 'women',
            element: <Women />
         },
         { 
            path: 'kid',
            element: <Kid />
         },
         {
            path: 'about',
            element: <About />
         },
         {
            path: 'products/:productId',
            element: <ProductDetails />
         },
      ],
      errorElement: <Error />,
   },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter} />)