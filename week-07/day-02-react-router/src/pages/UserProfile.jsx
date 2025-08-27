import { useParams } from "react-router";
import { Link } from "react-router";

export default function UserProfile() {
    const params = useParams();
    console.log(params);

  return (
    <div>
        <h1>User Profile</h1>
        <p>We can use the parameter userId from the url: {params.userId} </p>

         {/* ==== Links to other pages ==== */}
        {/* <Link to="/">
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
        <Link to="/book/:bookId">
        <button>Book</button>
        </Link> */}
    </div>
  )
}
