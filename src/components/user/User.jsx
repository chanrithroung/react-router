import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const User = ({id,name, username, email, phone}) => {
    console.log(id);
    return <div className="col-xl-6 col-xxl-4  col-lg-6 col-md-12 col-sm-12 mb-4 p-3">
                <article className="card-bg shadow p-4 border rounded-3">
                    <h4 className="mb-4"> Name: {name}  </h4>
                    <hr />
                    <h5>Username: {username} </h5>
                    <p>email: <a href={email}>{email}</a></p>
                    <p>Phone: {phone}</p>
                    <Link className="btn btn-primary" to={id.toString()}> <FontAwesomeIcon icon={faUser} /> Detial</Link>
                </article>
            </div>
}

export default User;