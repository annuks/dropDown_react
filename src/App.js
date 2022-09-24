//importing required components
import  React from 'react';
import Dropdown from './Dropdown';
import './App.css';
import './Dropdown.css'


// accessing dropdown components
 function App () {
  const list = ["Domino's", "McDonald's", "Burger King", "StarBucks","Barista Lavazza"]
  return (
    <div className='DropdownCheck'>
      <div id='labels'> Your Favourite Hangout Place: </div>
      <Dropdown list={list} />
    </div>
  )};

export default App;
