import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SalonBooking from './components/Salon.jsx';

import "./index.css";
import Home from './components/Home.jsx'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {path:"/login" , element:<Login/>},
  {path:"/register" , element:<Register/>},
  {path:"/salon" , element:<SalonBooking/>},
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
