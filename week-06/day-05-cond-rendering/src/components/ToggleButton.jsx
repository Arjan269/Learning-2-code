import { useState, useEffect } from 'react'

function ToggleButton() {
    const [isOn, setIsOn] = useState(true);
    const [messageToRender, setMessageToRender] = useState("The toggle button is on! 🥳");
    
    function handleClick() {
        // if (isOn === true) {
        //     setIsOn(false)
        // } else {
        //     setIsOn(true)
        // }

        setIsOn(!isOn);
    }

    useEffect(() => {
        console.log(isOn);

        if (isOn) {
            setMessageToRender("The toggle button is on! 🥳")
        } else {
            setMessageToRender("The toggle button is off! 😭")
        }

    }, [isOn])

  return (
    <div>
        <button onClick={handleClick} >Click to Toggle</button>
        {/* <button onClick={() => setIsOn(!isOn)}>Click to Toggle</button> */}
        <p>{messageToRender}</p>

    </div>
  )
}


export default ToggleButton;
