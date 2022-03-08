import React from "react";
import { Route, Routes } from "react-router-dom";
import './style.css'; 
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import UserAuthContextProvider from "./context/UserAuthContext";



function App(){

    return(
      <>
        <UserAuthContextProvider> 
          <Routes> 
            <Route path="/login" element={<Login />}></Route>
            <Route path="/" 
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }>
            </Route>
            <Route path="/signup" element={<Signup />}></Route>
          </Routes>

        </UserAuthContextProvider>
      </>
    )
  
}


export default App;