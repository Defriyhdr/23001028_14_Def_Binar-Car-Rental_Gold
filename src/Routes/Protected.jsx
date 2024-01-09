import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { validationOrder } from '../validation/validation'
import ButtonSetDate from '../components/ButtonSetDate'
const Protected = ({children}) => {
    const location = useLocation()
    
  const token = localStorage.getItem("accesToken")
    if(!token){
      return   <Navigate to={'/login'} state={{prevUrl : location.pathname }} />
    }

  return (
    <div>{children || <Outlet />}

    </div>
  )
}

export default Protected