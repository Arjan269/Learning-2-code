
import './App.css'
import Card from './components/Card.jsx'

function App() {


  return (
    <>
      <Card h3Text="text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, iusto.</p>
      </Card>
      <Card h3Text="image">
        <img style={{maxWidth: "80%", maxHeight: "60%"}} src="https://i.redd.it/7t1gx084t8ge1.png" alt="One Piece final war mural" />
      </Card>
      <Card h3Text="button">
        <button>Button</button>
      </Card>
         <Card h3Text="text"></Card>
    </>
  )
}

export default App
