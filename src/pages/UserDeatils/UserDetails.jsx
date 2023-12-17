/* eslint-disable react/prop-types */
import { useLoaderData } from "react-router-dom";


const UserDetails = () => {

    const loggedUser = useLoaderData();
    console.log(loggedUser);

    const { email, name, phone, gender, source, city, state } = loggedUser;

    return (
        <div className="w-[80%] mx-auto">
            <h2 className="text-4xl font-bold text-center my-16">Details of {name}</h2>
            <div className="card w-96 bg-base-200 mx-auto">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p><span className="font-bold">Email: </span>{email}</p>
                    <p><span className="font-bold">Phone: </span>{phone}</p>
                    <p><span className="font-bold">Gender: </span>{gender}</p>
                    <p><span className="font-bold">Source: </span>{source}</p>
                    <p><span className="font-bold">City: </span>{city}</p>
                    <p><span className="font-bold">State: </span>{state}</p>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;