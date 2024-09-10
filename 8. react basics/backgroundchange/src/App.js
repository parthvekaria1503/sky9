import './App.css';
import { useState } from "react"
import Card from './Card'

function App() {
  const [color, setColor] = useState("red");
  const [count, setCount] = useState(0)
  let myObj = {
    username: "parth",
    age: 21
  }
  let newArr = [1, 2, 3]

  const [counter, setCounter]  = useState(15)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }


  return (
    <div style={{backgroundColor: color}}>
      <div>
        <div>
          <button onClick={() => setColor("red")} style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} style={{backgroundColor: "blue"}}>Blue</button>
        </div>
      </div>
      <Card username="abc" btnText="click me" />
      <Card username="Parth" />


      <h1>React Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>      
    </div>
    
  );
}

export default App;
