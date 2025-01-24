import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const navigate = useNavigate()
    const {user, authLoading} = useContext(AuthContext)
 
    if(authLoading) return(<p>Loading</p>)

    return <div>{ user ? navigate("/") : children}</div>;
}

export default PrivateRoute