import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

const IsAuthentication = ({children}) => {
    const token =localStorage.getItem("accesToken")
    if(token) {
      return<Navigate to={"/"}/>
    }
  return (
    <div>{children || <Outlet />}</div>
  )
}

export default IsAuthentication