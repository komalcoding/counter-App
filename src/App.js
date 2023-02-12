import logo from './logo.svg';
import './App.css';
import {useState} from"react"
function App() {
  const [input, setinput]=useState(0)
  return (
    
   <div>
    <div>{input}</div>
    <div>
      <h1>Counter App</h1></div>
      <button onClick={()=>setinput(input+1)}>increase</button>
      <button onClick={()=>setinput(input-1)}>decrease</button>
      <button onClick={()=>setinput(0)}>reset</button>
   </div>
  );
}

export default App;
