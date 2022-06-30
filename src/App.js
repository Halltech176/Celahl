import { Routes, Route } from "react-router-dom";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import Sidebar from "./components/Common/Sidebar/Sidebar";

import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Profile from "./components/pages/Profile/Profile";

import Properties from "./components/Dashboard/Properties/Properties";
import AddProperties from "./components/Dashboard/AddProperties/AddProperties";

import Contact from "./components/forms/Contact/Contact"
import Signin from "./components/forms/Signin/Signin"
import Login from "./components/forms/Login/Login"
import Faq  from "./components/forms/Faq/Faq"
import './App.css'
import NoMatch from "./components/routes/NoMatch";

// import {ContextProvider} from './Context/UserContext'

function App() {
  // const location = useLocation()

  return (
   <>
   <div className='project-container'>
   <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/faqs' element={<Faq/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/properties' element={<Properties/>}/>
        <Route path='/addproperty' element={<AddProperties/>}/>
        <Route path='*' element={<NoMatch/>}/>
      </Routes>

      {/* <Routes></Routes> */}
     <Footer/>
     </div>
     </>
  );
}

export default App;
