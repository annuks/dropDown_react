
import  * as React from 'react';
import './App.css';

 const App  = ()=> {
  const [obj, setObj] =React.useState('profession')
  const handleUpdate = (event)=>{
    setObj(event.target.value);
  };
  return (
    <div className="App">
      <header>
        <div>
        <label>
          Let me Know Your Work Profile...
          <select value={obj} onChange = {handleUpdate}>
            <option value = "associate-software-developer">Associate Software Developer</option>
            <option value = "software-developer"> Software Developer</option>
            <option value = "software-engineer">Software Engineer</option>
            <option value = "senior-software-engineer">Senior Software Engineer</option>

          </select>
        </label>
        <p> Your Designation {obj} !</p>
        </div>
       </header>
    </div>
  );
}

export default App;
