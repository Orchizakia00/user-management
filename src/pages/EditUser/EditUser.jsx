import { useLoaderData } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import toast from "react-hot-toast";


const EditUser = () => {
    const user = useLoaderData();
    const axios = useAxios();

    const { email, name, phone, gender, source, city, state } = user;

    const handleEdit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const gender = form.gender.value;
        const city = form.city.value;
        const state = form.state.value;
        const sourceElements = form.querySelectorAll('input[name="source"]:checked');
        const sourceValues = Array.from(sourceElements).map(element => element.value);

        const updatedInfo = { name, email, phone, gender, city, state, source: sourceValues };

        axios.patch(`/logged-users/${user.email}`, updatedInfo)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    toast.success(`Successfully updated user's information!`)
                }
            })
    }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mb-8">Update User</h2>
            <form id="addUserForm" onSubmit={handleEdit} className="max-w-4xl mx-auto">
                <div className="md:flex mb-8 gap-4">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="User Name" defaultValue={name} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="phone" placeholder="Mobile" defaultValue={phone} className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="md:flex mb-8 gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="email" placeholder="User Email" defaultValue={email} className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">Gender</span>
                        </label>
                        <div className="flex gap-8 mt-2">
                            <div className="flex items-center gap-2 mb-4">
                                <input type="radio" name="gender" value="male" defaultChecked={gender === 'male'} className="radio" />
                                <label htmlFor="">Male</label>
                            </div>
                            <div className="flex items-center gap-2 mb-4">
                                <input type="radio" name="gender" value="female" defaultChecked={gender === 'female'} className="radio" />
                                <label htmlFor="">Female</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="md:flex mb-8 gap-4">
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">City</span>
                        </label>
                        <label className="input-group">
                            <select className="select select-bordered w-full" defaultValue={city} name="city">
                                <option>Mumbai</option>
                                <option>Pune</option>
                                <option>Ahmedabad</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control flex-1">
                        <label className="label">
                            <span className="label-text">State</span>
                        </label>
                        <input type="text" name="state" placeholder="state" defaultValue={state} className="input input-bordered" required />
                    </div>
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">How did you hear about this?</span>
                    </label>
                    <div className="flex gap-20">
                        <div className="">
                            <div className="flex items-center gap-3 mb-2">
                                <input type="checkbox" name="source" value={'linkedin'} defaultChecked={source[0] === 'linkedin'} className="checkbox" />
                                <label htmlFor="">LinkedIn</label>
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <input type="checkbox" name="source" value={'job-portal'} defaultChecked={source[0] === 'job-portal'} className="checkbox" />
                                <label htmlFor="">Job Portal</label>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex items-center gap-3 mb-2">
                                <input type="checkbox" name="source" value={'friends'} defaultChecked={source[0] === 'friends'} className="checkbox" />
                                <label htmlFor="">Friends</label>
                            </div>
                            <div className="flex items-center gap-3 mb-2">
                                <input type="checkbox" name="source" value={'others'} defaultChecked={source[0] === 'others'} className="checkbox" />
                                <label htmlFor="">Others</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <input type="submit" value="Update" className="btn btn-block bg-gray-700 text-white normal-case hover:text-black" />
                </div>

            </form>
        </div>
    );
};

export default EditUser;