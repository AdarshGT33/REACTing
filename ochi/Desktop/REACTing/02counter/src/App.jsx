import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5);

  
  const addValue = () => {
    counter += 1
    // if (counter > 20){
    //   setCounter(counter = 20)
    // }
    // setCounter(prevCounter => prevCounter + 1); Interview Prep: prevCounter is a function and hence is expecting a value which will be provided by useState( which will be its most recent value(in our case it is counter)). In this way all these lines are not just requests requesting same operation but are unique line of code which will have its unique impact in the UI with a sudden increase in the value instead of increasing it one by one.
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    // setCounter(prevCounter => prevCounter + 1);
    setCounter(counter);
  }

  const cutValue = () => {
    counter -= 1
    if(counter < 0){
      setCounter(counter = 0)
    }
    setCounter(counter)
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value = {counter}</h2>
      <button onClick={addValue}>Add in the Value</button>
      <br />
      <button onClick={cutValue}>Cut in the Value</button>
      <p>label: {counter}</p>
    </>
  )
}

export default App
