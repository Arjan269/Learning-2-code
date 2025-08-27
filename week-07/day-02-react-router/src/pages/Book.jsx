import { useParams } from "react-router";
import { Link } from "react-router";

export default function Book() {
    const params = useParams();
    console.log(params);

  return (

    <div>
        <h1>Book</h1>
        <p>You are about to access book: {params.bookId} </p>

         {/* ==== Links to other pages ==== */}
        {/* <Link to="/Home">
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
        </Link> */}
    </div>
  )
}
