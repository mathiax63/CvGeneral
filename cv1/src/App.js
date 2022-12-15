import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Head from './components/layout/Head';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Principal from './pages/Principal';
import  PaginasInfo  from './pages/PaginasInfo';
import DiplomasInfo from './pages/DiplomasInfo';



function App() {
  return (
    <div >
      <Head/>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="PaginasInfo/:id" element={<PaginasInfo/>}/>
        <Route path='DiplomasInfo' element={<DiplomasInfo/>}/>
        </Routes>
        </BrowserRouter>
      <Footer/>
     
    </div>
  );
}

export default App;
