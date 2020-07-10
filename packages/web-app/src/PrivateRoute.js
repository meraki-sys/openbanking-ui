import React from 'react'
import { useSelector } from 'react-redux'
import { Redirect, Route } from 'react-router'

const PrivateRoute = ({ children, ...rest }) => {
    const token = useSelector(
        (state) => state.auth.token || localStorage.getItem('token')
    )
    return token ? <Route {...rest}>{children}</Route> : <Redirect to="/" />
}

export default PrivateRoute
