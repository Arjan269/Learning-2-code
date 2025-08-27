import { useState } from 'react'

export default function CounterAddOne({addCount}) {
    // const [count, setCount] = useState(0);

    // const addCount = () => {
    //     setCount(count + 1);
    // }

  return (

    <div>
        {/* <p>Count: {count}</p> */}
        <button onClick={addCount} >Add One!</button>
    </div>
  )
}
