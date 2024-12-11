import { useLoaderData, useParams } from "react-router-dom";
import User from "./User";
import { useState } from "react";
import UserDetialPage from "./UserDetailPage";

const UserDetail = () => {
   const user = useLoaderData();
   if(!user) return <h1>Is Loading.....</h1>
    return <UserDetialPage {...user} />
}

export const userDetailLoader = async ({params}) => {
    const {id} = params;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if(!response.ok) throw new Error("Fial to fetch user");
        return await response.json();
    } catch(error) {
        console.log("Fial Fetch user Detail : ", error);
        throw error;
    }
 
}
export default UserDetail;