import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../index.js";

const Layout = () => {
    return <>
        <Navbar></Navbar>
            <div className="container-fluid bg-dark py-5">
                <div className="container p-4 text-light bg-dark">
                    <Outlet></Outlet>
                </div>
            </div>
        <Footer></Footer>
    </>
}


export default Layout;