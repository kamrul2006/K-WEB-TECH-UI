import Navbar from '../Components/FixedComponents/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/FixedComponents/Footer'

export default function MainLayOuts() {
    return (
        <div>

            <Navbar />

            <Outlet />

            <Footer />
        </div>
    )
}
