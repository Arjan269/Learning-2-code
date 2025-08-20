import {useEffect, useState} from 'react'
import './App.css'

function App() {
 const [count, setCount] = useState(0);
 const [reverseCount, revertCount] = useState(100);
 const [sum, setSum] = useState(0);
 const [colour, setColour] = useState("red");

 function updateCount() {
  setCount(count + 1);
  
 }

  function updateRevCount() {
  revertCount(reverseCount - 1);
  }

  // useEffect Examples
  // Example 1: on every render/re-render
  useEffect (() => {
    // console.log("Component re-rendered");
  })

  // Example 2 & 4: On state change this will trigger or on a props change
  useEffect(() => {
    // console.log("Count state variable has changed")
  }, [count])

  // Example 3: Once on component mount
  useEffect(() => {
    // console.log("Component rendered for the first time")
  }, [])

  // Example 5: On unmount
  useEffect(() => {
    return () => {
      // Clean up action can be taken. e.g stopping timers
      // console.log("Component unmounted")
    };
  });

  // ===== useEffect Example 1 =====
  useEffect(() => {
    console.log(`The count is at ${count}`);
    setSum(sum + count);
  }, [count])

  console.log(`The sum is ${sum}`);

  // ===== Colour change function ===== //
  function changeColour() {
    switch(colour) {
      case "red":
        setColour("aqua");
        break;
      case "aqua":
        setColour("yellow");
        break;
      case "yellow":
        setColour("deeppink");
        break;
      default:
        setColour("red");   
    };
}

//Exercise 2
  useEffect(() => {
    console.log(`The colour is currently ${colour}`);
  }, [colour]);

  return (
    <>
      {/* ===== Increase the count state variable ===== */}
      <div>Count: {count}</div>
      <button onClick={updateCount}>Add One</button>
      <br /><br />

      {/* ===== Decrease the count state variable ===== */}
      <div>Count: {reverseCount}</div>
      <button onClick={updateRevCount}>Subtract One</button>
      <br /><br />

      {/* ===== Color changer ===== */}
      <h3 style={{backgroundColor: colour}}>This element is going to change colour</h3>
      <button onClick={changeColour}>Change colour</button>
    </>
  )
}

export default App
