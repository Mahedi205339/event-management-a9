import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import Register from "../components/Register/Register";
import Events from "../pages/Events/Events";
import PrivateRoute from "./PrivateRoute";
import Booked from "../pages/Booked/Booked";
import ErrorPage from "../components/ErrorPage/ErrorPage";


const route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/event.json')

            },
            {
                path: '/event/:id',
                element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
                loader: () => fetch('/event.json')
            },
            {
                path : '/events',
                element: <PrivateRoute><Events></Events></PrivateRoute>,
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path : '/booked',
                element:<PrivateRoute><Booked></Booked></PrivateRoute>,
                loader: () => fetch('/event.json')
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
        errorElement:<ErrorPage></ErrorPage>
    }
    
])

export default route;