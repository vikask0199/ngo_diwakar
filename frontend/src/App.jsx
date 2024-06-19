import PublicOutlet from './outlets/PublicOutlet'
import 'typeface-roboto';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import DonatePage from './pages/donate';
import SubPaisaPaymentStatus, { SubPaisaPay } from './components/payment/subPaisa/SubPaisaPay';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WhatWeDo from './pages/WhatWeDo';
import TopNews from './pages/TopNews';
import ContactUs from './pages/ContactUs';
import Donation from "./pages/Donation"
import 'react-toastify/dist/ReactToastify.css';
import Captcha from './components/reusable/Captcha';


function App() {
  const contextClass = {
    success: "bg-blue-600",
    error: "bg-red-400 text-white",
    info: "bg-gray-600",
    warning: "bg-orange-400",
    default: "bg-indigo-600",
    dark: "bg-white-600 font-gray-300",
  };

  return (
    <>
      <Routes>
        <Route path='/' element={<PublicOutlet />}>
          <Route index element={<HomePage />} />
          <Route path='AboutUs' element={<AboutPage />} />
          <Route path='WhatWeDo' element={<WhatWeDo />} />
          <Route path='news-media' element={<TopNews />} />
          <Route path='WhatWeDo' element={<><div >What We Do</div> </>} />
          <Route path='Media' element={<><div >Media</div> </>} />
          <Route path='contact-us' element={<ContactUs />} />
          <Route path='our-donations' element={<Donation />} />
          <Route path='Events' element={<><div >Events</div> </>} />
          <Route path='Blog' element={<><div >Blog</div> </>} />
          <Route path='Donate' element={<DonatePage />} />
          <Route path='verify-not-robot' element={<Captcha />} />
          <Route path='payment'>
            <Route path='subpaisa'>
              <Route path='status/backend-res' element={<SubPaisaPaymentStatus />} />
            </Route>
          </Route>
        </Route>
        <Route path='subpaisapay' element={<SubPaisaPay />} />
      </Routes>
      <ToastContainer toastClassName={({ type }) => contextClass[type || "default"] +
        " relative flex p-1 min-h-10 rounded-md justify-between overflow-hidden cursor-pointer"
      }
        bodyClassName={() => "text-sm font-white font-med block p-3"}
        position="bottom-right"
        autoClose={4000} />
    </>
  )
}

export default App
