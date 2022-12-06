import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button';
import Click from './components/click';
import Fruits from './components/Fruit';
import Header from './components/Header';

function App() {
  return (
<div className='event'>
     <Header/>
     < Button/>
     <Click/>
     <Fruits/>
    </div>

  )
}

export default App;
