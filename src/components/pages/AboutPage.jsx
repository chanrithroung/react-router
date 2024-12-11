import { Outlet, NavLink } from "react-router-dom";
const About = () => {
    return  <>
        <h1>About Page</h1>
        <div className="d-flex  column-gap-3">
            <NavLink className="text-white text-decoration-none" to={"/about"}>Mission</NavLink>
            <NavLink className="text-white text-decoration-none" to={"version"}>Version</NavLink>
            <NavLink className="text-white text-decoration-none" to={"goal"}>Goal</NavLink>
        </div>
        <Outlet></Outlet>
    </> 
}
export default About;