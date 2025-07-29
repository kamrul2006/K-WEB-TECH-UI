import React from 'react'
import Navbar from '../Components/FixedComponents/Navbar'
import { Outlet } from 'react-router'

export default function MainLayOuts() {
    return (
        <div>

            <Navbar />

            <Outlet />

        </div>
    )
}
