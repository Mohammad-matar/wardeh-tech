import React from 'react'
import { Outlet } from 'react-router-dom'
import CategorySubmenu from './CategorySubmenu'
import Navbar from './Navbar'

export default function Layout() {
    return (
        <div>
            <Navbar />
            <CategorySubmenu />
            <Outlet />
        </div>
    )
}