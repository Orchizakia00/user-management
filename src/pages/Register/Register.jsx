import Lottie from "lottie-react";
import animation from "../../assets/animations/register-Animation - 1702630972056.json"
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Register = () => {

    const { createUser, updateUserProfile } = useAuth();
    const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const phone = form.phone.value;
        const gender = form.gender.value;
        // const source = form.source.value;
        const sourceElements = form.querySelectorAll('input[name="source"]:checked');
        const sourceValues = Array.from(sourceElements).map(element => element.value);

        const data = {
            name,
            email,
            password,
            phone,
            gender,
            source: sourceValues
        }
        console.log(data);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        console.log('user profile updated successfully');
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            phone: data.phone,
                            gender: data.gender,
                            source: data.source,
                        }
                        console.log(userInfo);
                        toast.success('User Created Successfully!')
                        navigate('/');
                        // axiosPublic.post('/users', userInfo)
                        //     .then(res => {
                        //         if (res.data.insertedId) {
                        //             toast.success('User Created Successfully!')
                        //             navigate('/')
                        //         }
                        //     })

                    })
            })
    }

    return (
        <div className="hero min-h-screen bg-base-200">

            <div className="hero-content flex-col gap-20 lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <Lottie loop={true} animationData={animation}></Lottie>
                </div>
                <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Register Now</h1>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Phone</span>
                            </label>
                            <input type="number" name="phone" placeholder="phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Gender</span>
                            </label>
                            <div className="flex gap-8">
                                <div className="flex items-center gap-2 mb-4">
                                    <input type="radio" name="gender" value="male" className="radio" />
                                    <label htmlFor="">Male</label>
                                </div>
                                <div className="flex items-center gap-2 mb-4">
                                    <input type="radio" name="gender" value="female" className="radio" />
                                    <label htmlFor="">Female</label>
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">How did you hear about this?</span>
                            </label>
                            <div className="flex items-center gap-3 mb-2">
                                <input type="checkbox" name="source" value={'linkedin'} className="checkbox" />
                                <label htmlFor="">LinkedIn</label>
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <input type="checkbox" name="source" value={'job-portal'} className="checkbox" />
                                <label htmlFor="">Job Portal</label>
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <input type="checkbox" name="source" value={'friends'} className="checkbox" />
                                <label htmlFor="">Friends</label>
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <input type="checkbox" name="source" value={'others'} className="checkbox" />
                                <label htmlFor="">Others</label>
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-blue-500 text-white hover:text-black">Register</button>
                        </div>
                        <p className="text-center mt-4">Already have an account? Please <Link to={'/login'}><span className="font-bold text-blue-500">Login</span></Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;