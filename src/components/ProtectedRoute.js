import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUserAuth } from '../context/UserAuthContext';

function ProtectedRoute({children}) {
    const {isAuthenticated} = useUserAuth();

    if(!isAuthenticated){
        return <Navigate to="/login" />
    }
    return children;
}

export default ProtectedRoute