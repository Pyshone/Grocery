import React from 'react'
import { Outlet } from 'react-router-dom'
import AppFooter from '../authlayouts/appFooter'

const AppLayouts = () => {
  return (
    <div>
      <Outlet/>
      <AppFooter/>
    </div>
  )
}

export default AppLayouts
