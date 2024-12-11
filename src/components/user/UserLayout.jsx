import { Outlet } from "react-router-dom"
const UserLayout = () => (
    <>
        <div className="container">
            <div className="row">
                <Outlet />
            </div>
        </div>
    </>
 )
export default UserLayout;