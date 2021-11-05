import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './modules/home/views';
import Raffle from './modules/raffle/views';
import MintableLogo from './assets/images/mintable.png';

import GlobalSearch from './components/globalSearch';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <header className='font-Lato flex absolute h-20 bg-white w-full flex-row justify-between items-center px-4'>
      <div className='flex flex-row items-center space-x-4'>
        <Link to='/'><img className='h-4 bg-black w-4' logo={MintableLogo} /></Link>
        <GlobalSearch />    
      </div>
      <div className='flex flex-row items-center space-x-4'>
        <nav className='flex flex-row items-center space-x-4'>
          <Link to='/browse'>Browse</Link>
          <Link to='/discover'>Discover</Link>
          <Link to='/mint'>Mint an Item</Link>
          <Link to='/raffle'>Vote/Dao</Link>
        </nav>
        <div>My Account</div>
        <div>Ethereum</div>
      </div>
    </header>
    <main className='main font-Lato h-full bg-gray-200 relative top-20'>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/raffle' element={<Raffle />}/>
      </Routes>
    </main>
    <footer className='font-Lato'></footer>
    </BrowserRouter>
  );
}

export default App;
