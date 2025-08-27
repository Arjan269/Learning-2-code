// import { useState } from 'react'
import styles from './ShowInput.module.css'

export default function ShowInput(props) {
  return (
    <div className={styles.displaySection}>
        This is the ShowInput component:
        <br />
        Text: {props.textboxContent}
    </div>
  )
}
