import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
    const { createUser, googleLogin } = useContext(AuthContext);

    const [confirmMessage, setConfirmMessage] = useState("")
    const [error, setError] = useState("")
    const location = useLocation();
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name')
        console.log(email, name, password)
        if (!/[A-Z].{8,}$/.test(password)) {
            setError('Your password should have contain at least 8 character  Capital letter ')
            return
        }
        setError('');
        setConfirmMessage('')

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/')
                setConfirmMessage("User successfully registered")
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }




    return (
        <div>
            <div className="hero-content flex-col  w-full mx-auto">

                {
                    error && < p className="text-red-600 font-bold">{error}</p>
                }
                {
                    confirmMessage && < p className="text-green-600 font-bold">{confirmMessage}</p>
                }

                <div className="text-center lg:text-left">
                    <h1 className="text-4xl font-bold">Please Register</h1>

                </div>
                <div className="card  w-full max-w-sm  bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                placeholder=" your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password"
                                name="password"
                                placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-5">
                            <div className="form-control mt-6 ">
                                <button className=" bg-yellow-600 text-white hover:bg-white  hover:text-yellow-600 w-36 h-10 rounded-lg">Register</button>
                            </div>
                        </div>
                    </form>
                    <p className="mb-4 text-center">Already have an account? Please <Link className="font-bold text-yellow-600 underline" to="/login">Login</Link> </p>
                </div>
                <div className="gap-2">
                    <button onClick={googleLogin} className="btn my-4 btn-outline w-full">
                        <FcGoogle></FcGoogle>
                        Google
                    </button>

                </div>
            </div>



        </div>

    );
};

export default Register;