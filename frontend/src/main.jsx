import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Provider} from "react-redux";
import { store } from './redux/store.js';

import SalonBooking from './components/Salon.jsx';
import ACRepair from './components/AcRepair.jsx';
import Cleaning from './components/Cleaning.jsx';
import Electrician from './components/Electrician.jsx';
import Plumber from './components/Plumber.jsx';
import Painting from './components/Painting.jsx';
import Massage from './components/Massage.jsx';
import Checkout from './components/Checkout.jsx';
import VendorRegister from './components/vendor/VendorRegister.jsx';
import VendorPanel from './components/vendor/VendorPanel.jsx';


import "./index.css";
import Home from './components/Home.jsx'
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {path:"/login" , element:<Login/>},
  {path:"/register" , element:<Register/>},
  {path:"/salon" , element:<SalonBooking/>},
  {path:"/ac" , element:<ACRepair/>},
  {path:"/cleaning" , element:<Cleaning/>},
  {path:"/electrician" , element:<Electrician/>},
  {path:"/plumber" , element:<Plumber/>},
  {path:"/painting" , element:<Painting/>},
  {path:"/massage" , element:<Massage/>},
  {path:"/checkout" , element:<Checkout/>},
  {path:"/vendorRegister" , element:<VendorRegister/>},
  {path:"/vendorPanel" , element:<VendorPanel/>},
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
   <RouterProvider router={router}/>
   </Provider>
  </StrictMode>,
)
