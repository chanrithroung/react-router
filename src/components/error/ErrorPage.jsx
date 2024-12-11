import { Link } from "react-router-dom"
const ErrorPage = () => {
    return <div className="not-found-page container h-100 gap-4">
        <h1 className="fw-1 not-found-text">404</h1>
        <Link to="/" className="btn btn-primary px-4">back Home</Link>
    </div>
}
export default ErrorPage;