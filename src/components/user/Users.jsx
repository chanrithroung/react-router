import {  useLoaderData } from "react-router-dom";
import User from "./User";
const Users = () => <>
    <h1 className="mb-5 mx-auto">Users Page</h1>
    {useLoaderData().map( e => <User key={e.id} {...e} /> )}
</>
export const userLoader = async () => (await fetch("https://jsonplaceholder.typicode.com/users")).json();
export default Users;