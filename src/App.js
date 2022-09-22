
import  React from 'react';
import Dropdown from './Dropdown';
import './App.css';
import './Dropdown.css'

 function App () {
  const list = ["One", "Two", "Three", "Four"]
  return (
    <div className='DropdownCheck'>
      <Dropdown list={list} />
    </div>
  )};

export default App;
