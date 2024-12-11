import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "../index.js";

const Layout = () => {
    return <>
        <Navbar></Navbar>
            <div className="container-fluid p-0 bg-dark py-5">
                <div className="container p-0 p-sm-0 p-md-0 text-light bg-dark">
                    <Outlet></Outlet>
                </div>
            </div>
        <Footer></Footer>
    </>
}

export default Layout;