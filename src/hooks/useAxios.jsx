import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://user-management-server-kohl.vercel.app'
})

const useAxios = () => {
    
    return axiosPublic;
};

export default useAxios;