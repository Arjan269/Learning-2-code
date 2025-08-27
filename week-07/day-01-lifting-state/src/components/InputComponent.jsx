// import { useState } from 'react'
import styles from './InputComponent.module.css'

export default function InputComponent({ handleChange }) {
    // const [textboxContent, setTextboxContent] = useState("")

    // function handleChange (e) {
    //     console.log(e.target.value)
    //     setTextboxContent(e.target.value)
    // }

  return (
    <div className={styles.input}>
        <input type='text' onChange={handleChange} />
    </div>
  )
}
