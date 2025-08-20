import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

const myName = "Golly Whooped";
const message1 = "Hey you";
const message2 = "What's going on";
  return (
    <>
    <h1 style={{backgroundColor: "crimson", color: "rgb(19, 157, 232)"}} >{myName}</h1>

    <h2>{message1}</h2>
    <p className='message2'>{message2}??</p>
    

  {/* <nav>
    <ul className='nav-container'>
      <li className='btn-1'>Home</li>
      <li className='btn-1'>Project</li>
      <li className='btn-1'>About us</li>
      <li className='btn-1'>Contact us</li>
    </ul>
  </nav> */}

  <Header />
  <Header />
  <Header />
  <Header />

  <Footer />

    </>
  )
}

export default App
