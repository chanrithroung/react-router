import { Link } from "react-router-dom";

const UserErrorPage = () => {
    return <div className="container">
        <div className="row justify-content-center">
            <div className="col-3">
                <h3>Have Something when wrong</h3>
                <Link className="btn btn-primary px-5" to={"/users"}>Usrs</Link>
            </div>
        </div>
    </div>
}

export default UserErrorPage;