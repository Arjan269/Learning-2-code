import InputComponent from "./components/InputComponent.jsx";
import ShowInput from './components/ShowInput.jsx';
import CounterAddOne from "./components/CounterAddOne.jsx";
import CounterMinusOne from "./components/CounterMinusOne.jsx";
import './App.css';
import { useState } from 'react'

function App() {
const [textboxContent, setTextboxContent] = useState("")

    function handleChange (e) {
        console.log(e.target.value)
        setTextboxContent(e.target.value)
    }

    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

      const minusCount = () => {
        setCount( count - 1);
    }

  return (
    <>
     <InputComponent handleChange={handleChange} />
     <ShowInput textboxContent={textboxContent} />

    <br /><br />

     {/* Exercise 1 */}
     <h3>Current Count: {count} </h3>
     <CounterAddOne addCount={addCount} />
     <CounterMinusOne minusCount={minusCount} />
    </>
  )
}

export default App
