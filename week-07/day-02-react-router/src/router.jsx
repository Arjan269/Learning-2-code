import { createBrowserRouter } from 'react-router';

import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import UserProfile from './pages/UserProfile.jsx'
import Book from './pages/Book.jsx'

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
        index: true,
        Component: Home,
    },
    {
        path: "/about",
        Component: About,
    },
    {
        path: "/contact",
        Component: Contact,
    },
    {
        path: "/login",
        Component: Login,
    },
    {
        path: "/signup",
        Component: Signup,
    },
    {
        path: "/user/:userId",
        Component: UserProfile,
    },
    {
        path: "/book/:bookId",
        Component: Book,
    },
        ],
    },
    
    
]);

export default router;