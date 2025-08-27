import { useState } from 'react'
import './App.css'
import srcChurro from './assets/src_churros.jpg'
import styles from './App.module.css'

function App() {
  const [image, setImage] = useState(srcChurro)
  const [imageClass, setImageClass] = useState("bigImage")

  const publicChurro = "public_churros.jpg"
  const urlChurro = "https://www.theflavorbender.com/wp-content/uploads/2023/04/Churros-2885-2.jpg"
  return (
    <>

     {/* <img src={srcChurro} alt="srcChurro" width="50%"/>
      <img src={publicChurro} alt="publicChurro" width="50%"/>
      <img src={urlChurro} alt="urlChurro" width="50%"/> */}

      <button onClick={() => {
        setImage(srcChurro)
        setImageClass("smallImage")
      }} className={`${styles[imageClass]} ${styles.bigImage}`}>src</button>
      <button onClick={() => {
        setImage(publicChurro)
        setImageClass("bigImage")
      }}>public</button>
      <button className='bigImage smallImage' onClick={() => { setImage(urlChurro) }}>url</button>
      <br />
      <img src={image} alt="churro" width='500' />
    </>
  )
}


export default App


function Car(props) {
  return (
    <>
      <p>{props.brand}</p>
      <p>{props.year}</p>
      <p>{props.make}</p>

    </>
  )
}

function Car2({ brand, year, make }) {
  return (
    <>
      <p>{brand}</p>
      <p>{year}</p>
      <p>{make}</p>
    </>
  )
}
 