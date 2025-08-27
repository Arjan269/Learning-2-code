import { Outlet } from 'react-router';
import { Link } from "react-router";
import './App.css'


function App() {
 

  return (
    <>
      <header>
        <h1>This could be a header</h1>
          <Link to="/">
        <button>Home</button>
        </Link>
        <Link to="/About">
        <button>About</button>
        </Link>
        <Link to="/Contact">
        <button>Contact</button>
        </Link>
        <Link to="/Login">
        <button>Login</button>
        </Link>
        <Link to="/Signup">
        <button>Signup</button>
        </Link>
        <Link to="/user/:userId">
        <button>User</button>
        </Link>
        <Link to="/book/:bookId">
        <button>Book</button>
        </Link>
      </header>

      <main>
          <Outlet />
      </main>

      <footer>
        This is a Footer it is always showing
      </footer>
    </>
  )
}

export default App
