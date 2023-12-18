import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'

import MainPage from './pages/MainPage/MainPage.jsx'
import Recipes from './pages/Recipes/Recipes.jsx'
import Header from './content/Header/Header.jsx'
import SignUp from './content/Regist/SignUp.jsx'
import SignIn from './content/Regist/SignIn.jsx'
import Footer from './content/Footer/Footer.jsx'
import AboutUs from './pages/aboutUs/AboutUs';
import Korean from './pages/Catalog/Korean.jsx';
import Japan from './pages/Catalog/Japan.jsx';
import Eastern from './pages/Catalog/Eastern.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/korean" element={<Korean />} />
          <Route path="/japan" element={<Japan />} />
          <Route path="/eastern" element={<Eastern />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );

}

export default App
