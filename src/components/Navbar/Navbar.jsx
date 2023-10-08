import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.jpg"
const Navbar = () => {

    const navLink = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/events">Events</NavLink> </li>
        <li> <NavLink to="/login">Login</NavLink> </li>
        <li> <NavLink to="/register">Register</NavLink> </li>


    </>

    

    return (
        <div className="navbar mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="bt btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu font-semibold menu-sm dropdown-content mt-3 z-[1] p-2  bg-yellow-500 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                <img className="w-20 lg:w-32" src={logo} alt="" />
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 px-1 font-semibold mr-10">
                    {navLink}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;