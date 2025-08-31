
import './App.css'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

function App() {
  const [isChecked, setIsChecked] = useState(false);

  function handleClick() {
    console.log("Button was clicked!")
  }

  function handleChange(e) {
    if (e.target.checked === true) {
      setIsChecked(true);
    } else {
      setIsChecked(false)
    }
  }
  

  return (
    <div style={{display: 'flex', gap: '20px'}}>
      {/* Buttons */}
      <Button variant="text">What a cool button</Button>
      <Button variant="contained" color='secondary' onClick={handleClick}>What a cool button</Button>
      <Button variant="outlined" color='warning' onClick={() => console.log("Warning button clicked!")}>What a cool button</Button>
      <Button variant="contained" color='success' href='https://www.google.com' target="_blank" >Take me to Google</Button>

      {/* Checkbox */}
      <Checkbox onChange={handleChange} />
      {isChecked && <p>The checkbox is checked ✅</p>}
    </div>
  )
}

export default App
