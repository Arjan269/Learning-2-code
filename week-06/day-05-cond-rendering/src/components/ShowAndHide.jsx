import { useState } from 'react'

export default function ShowAndHide() {
    const [showContent, setShowContent] = useState(false)

    function handleClick() {
        setShowContent(!showContent)
    }

  return (

    <div>
        <button onClick={handleClick} >Show or Hide</button><br />
        {/* {showContent ? "Winner Winner Chicken Dinner 🍗" : ""} */}
        {showContent && <p>Winner Winner Chicken Dinner 🍗</p>}
    </div>
  )
}
