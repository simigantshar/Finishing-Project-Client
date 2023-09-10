import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'
import Footer from '../../../layout/Footer'

const AdminLayout = () => {
  return (
    <div>
      <AdminHeader/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AdminLayout