import { useState } from 'react'

export default function AlternativeToggleButton() {
    const [isOn, setIsOn] = useState(true)

    function handleClick() {
        setIsOn(!isOn);
    }

    return (
      <div>
      <button onClick={handleClick} >Alternative Toggle</button>
      {isOn 
        ? <p style={{color:"green"}}>The toggle button is on! 🥳</p> 
        : <p style={{color:"red"}}>The toggle button is off! 😭</p>}

        {/* You could also just conditionally render the string inside the p tag */}
        {/* and not the whole element if you wish */}
        <p>{isOn ? "Toggle Button is on" : "Toggle Button is off"}</p>
      </div>
      

  )
}
