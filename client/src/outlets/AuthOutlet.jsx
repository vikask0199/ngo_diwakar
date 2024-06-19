import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthOutlet = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default AuthOutlet