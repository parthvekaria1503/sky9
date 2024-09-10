import { useState } from "react";
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

let interval = undefined;
function App() {
  
  const [watch, setWatch] = useState(0)
  const [started, setStarted] = useState(false)
  
  const startwatch = () =>{
      interval = setInterval(() => {
        // setWatch(watch+1)
        setWatch((x)=>x+1)
      }, 1000);
      setStarted(true)
    }
    const stopwatch = () =>{
      clearInterval(interval)
      setStarted(false)
    }
    const resetwatch = () =>{
      setWatch(0);
      clearInterval(interval);
      setStarted(false)
    }
  return (

    <div className="App">
    
    <BrowserRouter>
    <Link to="/about/:name">About</Link><br/>
    <Link to="/">Home</Link>
    {/* <Link to="/*">not found</Link> */}
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
      <h1>{watch}</h1>
      <button disabled={started} onClick={startwatch}>Start</button>
      <button onClick={stopwatch}>Stop</button>
      <button onClick={resetwatch}>Reset</button>
    </BrowserRouter>      
    </div>
  );
}

export default App;
