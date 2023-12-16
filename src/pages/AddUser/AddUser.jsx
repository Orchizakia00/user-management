

const AddUser = () => {
    return (
        <div className="bg-base-200 p-20 min-h-screen">
            <h2 className="text-4xl font-bold text-center mb-8">Add New User</h2>
            <form className="max-w-4xl mx-auto">
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">User Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="user_name" placeholder="User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Mobile</span>
                        </label>
                        <label className="input-group">
                            <input type="number" name="mobile" placeholder="Mobile" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <div className="form-control mb-8">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="email" placeholder="User Email" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="">
                    <input type="submit" value="Add Product" className="btn btn-block bg-gray-700 text-white normal-case hover:text-black" />
                    <button className="btn btn-block mt-4">Cancel</button>
                </div>

            </form>
        </div>
    );
};

export default AddUser;