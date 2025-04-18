import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Navbar from "./components/shared/Navbar"
import  Home  from "./components/Home"
import Login from "./components/Auth/Login"
import Signup from "./components/Auth/Signup"
import Jobs from "./components/Jobs"


const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  }
  

])
function App() {
  return (
   <>
   <RouterProvider router = {appRouter}/>
   </>


  )
}

export default App
