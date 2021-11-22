import React from 'react'
//import { Route, Redirect } from "react-router-dom"
import { Route,Redirect } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest}) => {
    const isLoggedIn = false;
    return (
        <Route {...rest} render={()=>isLoggedIn?(children):<Redirect to={'/'}/>} />    
    )
}

export default PrivateRoute;
