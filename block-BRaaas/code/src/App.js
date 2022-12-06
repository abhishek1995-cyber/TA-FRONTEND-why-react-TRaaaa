import React from 'react';
import './App.css';
import Button from './components/button';
import Click from './components/click';
import Fruits from './components/Fruit';
import Header from './components/Header';

function App() {
  return (
<div className='clickevent'>
     <Header/>
     < Button/>
     <Click/>
     <Fruits/>
    </div>

  )
}

export default App;
