import axios from "axios"
import { BACKEND_URL } from "../config"

async function getUserDetails(){
    try{
        const response = await axios.get(`${BACKEND_URL}/api/user`);
        return response.data;
    }catch(e){
        console.log(e);
    }
}

export default async function UserCard(){
    const userData = await getUserDetails();

    return <div className="h-screen border-2 rounded-md flex flex-col justify-center items-center">
        <h2>User Details</h2>
        <p>Email:{userData.email}</p>
        <p>Name:{userData.name}</p>
    </div>
}