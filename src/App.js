import React from "react"
import { useState } from "react"
import ReactDOM from "react-dom/client"
import { lazy, Suspense} from "react"
import NavBar from "./components/NavBar"
import ProductCard from "./components/ProductCard"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import Men from "./components/Men"
import Women from "./components/Women"
import Kid from "./components/Kid"
import About from "./components/About"
import Error from "./components/Error"
import Login from "./components/Login"
import { useRouteError } from "react-router-dom"
import ProductDetails from "./components/ProductDetails"
import MemoHook from "./components/MemoHook"
import UserContext from "./utils/UserContext"
// import Groceries from './components/Groceries'
{/**simple tarika se karne ke bajay hum lazy loading ke through import karenge taaki dist folder me seperate html file bane iske liye network in inspect can see so that there are not too much load in one file and got seperate file example flipkart grocery bhi sell karta hai uska alag application ke tarah treat karo */}

const Groceries = lazy(()=>import('./components/Groceries'))

const App = () => {
   const [userName, setUserName] = useState("Ram");
   console.log("userName", userName)
   return (
      <UserContext.Provider value={{name: userName, setUserName}}> {/* valu ek object hai */}
         <div>
            <NavBar />
            <Outlet />
         </div>
      </UserContext.Provider>
   );
}

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
            path: 'groceries',
            element: <Suspense feedback={<h1>Loading...</h1>}><Groceries /></Suspense>
         },
         {
            path: 'login',
            element: <Login />
         },
         {
            path: 'memo',
            element: <MemoHook />
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