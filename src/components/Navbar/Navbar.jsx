import { Link, NavLink } from "react-router-dom";
import userPic from '../../assets/user.png'
import logo from "../../assets/logo.jpg"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user)
    const handleLogOut = () => {
        logOut()
            .then(result => {
                result.user
            })
            .catch(error => console.error(error))
    }


    const navLink = <>
        <li> <NavLink to="/">Home</NavLink> </li>
        <li> <NavLink to="/events">Gallery</NavLink> </li>
        <li> <NavLink to="/booked">Booked</NavLink> </li>
        <li> <NavLink to="/login">Login</NavLink> </li>



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
            {/* <div className="navbar-center gap-2">
                
            </div> */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal gap-6 px-1 font-semibold mr-10">
                    {navLink}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="flex items-center gap-2">
                    <img className="h-14 rounded-lg" src={user?.photoURL ? user.photoURL : userPic} alt="" />
                    <p>{user?.displayName}</p>
                </div>

                {
                    user ? <button onClick={handleLogOut} className="btn">Log out</button> : <Link to="/login">
                        <button className="btn">Login</button>
                    </Link>
                }

            </div>
        </div>
    );
};

export default Navbar;