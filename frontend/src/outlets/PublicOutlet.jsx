import { Outlet } from 'react-router-dom'
import Footer from "../components/reusable/Footer"
import Navbar from '../components/reusable/Navbar'

const PublicOutlet = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PublicOutlet