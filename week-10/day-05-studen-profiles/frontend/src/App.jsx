import User from './components/User.jsx'
import './App.css'
import Sidebar from './components/Sidebar.jsx'

function App() {


  return (
    <div style={{display: "flex", height: "100vh", backgroundColor: "#b2e4fa"}}>
     <Sidebar />
     <User />
    </div>
  )
}

export default App
