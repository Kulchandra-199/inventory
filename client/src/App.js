import React from 'react';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import{createBrowserRouter,
  RouterProvider,
  Route,} from "react-router-dom";
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import VerifyEmail from './pages/VerifyEmail';
import Navbar from "./components/Navbar"

const Layout = ()=> {

  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [user, setUser] = React.useState();

  return(
    <div className="container">
      
      <Home isLoggedIn={isLoggedIn} user={user}/>
      
      </div>
  );
};


const router = createBrowserRouter ([
  {
    path: "/",
    element: <Layout  />,
    
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/forgotpassword",
    element: <ForgotPassword/>,
  },
  {
    path: "/resetpassword",
    element: <ResetPassword/>,
  },
  {
    path: "/verifyEmail",
    element: <VerifyEmail/>,
  },
]);

function App(){

  
  return(
  <div className="app">
    <div className="container">
    <RouterProvider router={router}/>
    </div>
  </div>
  );
}




export default App;
