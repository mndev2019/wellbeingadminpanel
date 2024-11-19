//import React from 'react'

import { Outlet } from "react-router-dom"
import Sidebar from "../Component/Sidebar"

const Layout = () => {
  return (
    <>
      <Sidebar content={<Outlet/>}/>
    </>
  )
}

export default Layout