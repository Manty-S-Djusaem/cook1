import { createBrowserRouter } from "react-router-dom";
import Footer from "../content/Footer/Footer.jsx";

import AboutUs from "../pages/aboutUs/AboutUs.jsx";
import MainPage from '../pages/MainPage/MainPage.jsx'
import Headers from '../content/Header/Header.jsx'
import Footer from "../content/Footer/Footer.jsx";

const path = (import.meta.env.PROD)? '/test' : ''

const router = createBrowserRouter([
  {
    path: `${path}//`,
    element: (
      <div>
        <Headers />
        <MainPage />
        <Footer />
      </div>
    )
  },

  {
    path: `${path}/aboutus`,
    element: (
      <div>
        <Headers />
        <AboutUs />
        <Footer />
      </div>
    )
  },
]);
export default router;