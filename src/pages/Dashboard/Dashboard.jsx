import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { FaArrowRight, FaEdit, FaTrashAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const Dashboard = () => {

    const axios = useAxios();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axios.get('users');
            return res.data;
        }
    });

    const handleDelete = user => {
        toast.custom((t) => (
            <div
                className={`${t.visible ? 'animate-enter' : 'animate-leave'
                    } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
                <div className="flex-1 w-0 p-4">
                    <div className="flex items-start">
                        <div className="ml-3 flex-1">
                            <p className="mt-1 text-sm text-gray-500">
                                Are you sure you want to fire?
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex border-l border-gray-200">
                    <button
                        onClick={() => {
                            toast.dismiss(t.id);
                            axios.delete(`/users/${user._id}`)
                                .then(res => {
                                    console.log(res.data);
                                    if (res.data.deletedCount > 0) {
                                        refetch();
                                        toast.success(`${user.name} is Deleted!`)
                                    }
                                })
                        }}
                        className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Yes
                    </button>
                    <button
                        onClick={() => toast.dismiss(t.id)}
                        className="w-full border border-transparent rounded-none p-4 flex items-center justify-center text-sm font-medium text-gray-600 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        ));
    }

    return (
        <div className=" w-[80%] mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Dashboard</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    users.map(user => <div key={user._id} className="card w-64 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{user.user_name}</h2>
                            <p>{user.email}</p>
                            <p><span className="font-bold">Mobile: </span>{user.mobile}</p>
                            <div className="card-actions justify-start mt-6">
                                <button className="btn  text-black"><FaArrowRight size={20}></FaArrowRight></button>
                                <button className="btn  text-black"><FaEdit size={20}></FaEdit></button>
                                <button onClick={handleDelete} className="btn  text-black"><FaTrashAlt size={20}></FaTrashAlt></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Dashboard;