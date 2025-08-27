import { useState } from 'react'

export default function CounterMinusOne({minusCount}) {
    // const [count, setCount] = useState(0);

    // const minusCount = () => {
    //     setCount( count - 1);
    // }

  return (

    <div>
        {/* <p>Count: {count}</p> */}
        <button onClick={minusCount}>Minus One!</button>
    </div>
  )
}
