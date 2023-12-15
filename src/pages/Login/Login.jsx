import Lottie from "lottie-react";
import animation from "../../assets/animations/login-Animation - 1702626968530.json"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {

    const {signIn} = useAuth();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User Logged In Successfully!")
                navigate('/');
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie loop={true} animationData={animation}></Lottie>
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login Now</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white hover:text-black">Login</button>
                        </div>
                        <p className="text-center mt-4">Do not have an account? Please <Link to={'/register'}><span className="font-bold text-blue-500">Register</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;