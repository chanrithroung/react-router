import { faPhone,faWebAwesome, faBuilding, faEnvelope, faUser, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";


const UserDetialPage = ({name, username, email, address, phone, website, company }) => {

    return <div className="col-xxl-6 p-4 col-xl-6 col-lg-8 col-md-12 col-sm-12 ">
        <h1 className="mb-5">User Detail Page</h1>
        <div className="p-3 rounded-4 border shadow">
            <h4 className="mb-3"> <FontAwesomeIcon icon={faUser} /> User Informations</h4>
            <h5>Name: {name} </h5>
            <h5 className="mt-3">Username: {username}</h5>
            <h5> <FontAwesomeIcon icon={faEnvelope} /> : <a href={email}>{email}</a></h5>
            <hr />
            <h4 className="mt-4"> <FontAwesomeIcon icon={faLocationDot} /> Address</h4>
            <ul>
                <li>Street: {address.street}</li>
                <li>Suite: {address.suite}</li>
                <li>city: {address.city}</li>
                <li>
                    <span>Geo</span>
                    <ul>
                        <li>Lat {address.geo.lat}</li>
                        <li>Lgn {address.geo.lng}</li>
                    </ul>
                </li>
            </ul>
            <hr />

            <h4 className="mt-4 mb-3">Contact</h4>
            <p> <FontAwesomeIcon className="me-2" icon={faPhone} />  {phone} </p>
            <p> <FontAwesomeIcon  className="me-2 text-goal" icon={faWebAwesome} />  {website} </p>
            <hr />
            <h4 className="mt-5 mb-3"> <FontAwesomeIcon className="me-2" icon={faBuilding} /> Company </h4>
            <p>company name : {company.name}</p>
            <p>company catchPhrase : {company.catchPhrase}</p>
            <p>company bs : {company.bs}</p>
        </div>
        <Link className="mt-5 d-block btn btn-primary"  to={"/users"}>All Users</Link>
    </div>
}


export default UserDetialPage;