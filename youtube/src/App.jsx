import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import Home from './pages/home/home';


function App() {
const [sideNavbar,setsideNavbar]=useState(true)

function setSideNavbarfunc(value){
  setsideNavbar(value)
}

  return (
    <>
    <div className='app-container'> 
      <Navbar setSideNavbarfunc={setSideNavbarfunc} sideNavbar={sideNavbar}/>
      <Home sideNavbar={sideNavbar}/>
     </div>
    
    
    </>
  )
}

export default App
