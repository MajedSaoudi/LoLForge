import { Route, Routes } from 'react-router-dom';
import ChampionBuild from './Pages/ChampionBuild';
import Champions from './Pages/Champions';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Items from './Pages/Items';
import FAQ from './Pages/FAQ';
 function App() {

  const Location = useLocation();

useEffect(()=>{
  window.scrollTo(0,0)
},[Location])

  console.log('App mounted');
  return (
    <div>
      
    <Routes>
        
        <Route path="/" element={<HomePage />} />
        <Route path="/ChampionBuild/:name" element={<ChampionBuild />} />
        <Route path="/Champions" element={<Champions />} />
        <Route path="/Items" element={<Items />}/>
        <Route path='/Faq' element={<FAQ />}/>
    </Routes>
    
    </div>
  );
}
export default App;
