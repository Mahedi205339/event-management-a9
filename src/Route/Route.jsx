import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import Register from "../components/Register/Register";
import Events from "../pages/Events/Events";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('event.json')

            },
            {
                path: '/event/:id',
                element: <EventDetails></EventDetails>,
                loader: () => fetch('event.json')
            },
            {
                path : '/events',
                element: <Events></Events>,
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default route;