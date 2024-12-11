import { Link } from "react-router-dom"

const Footer = () => <footer className="bg-dark text-light py-4">
    <div className="cotnainer p-3">
        <div className="row">
            {/* About Section */}
            <div className="col-md-4">
                <h5>About Us</h5>
                <p>
                    We provide high-quality services to our clients.
                    Contact us to learn more about our offerings.
                </p>
            </div>

            {/* Quick Link */}
            <div className="col-md-4 mb-3">
                <h5>Quick Link</h5>
                <ul className="list-unstyled">
                    <li><Link className="text-white text-decoration-none" to={"home"}>Home</Link></li>
                    <li><Link className="text-white text-decoration-none" to={"about"}>About</Link></li>
                    <li><Link className="text-white text-decoration-none" to={"service"}>Services</Link></li>
                    <li><Link className="text-white text-decoration-none" to={"contact"}>Contact</Link></li>
                </ul>
            </div>

            {/* Contact info */}
            <div className="col-md-4">
                <h5>Contact</h5>
                <p>Email: chanrithroung2@gmail.com</p>
                <p>Phone: +885 060 535 771</p>
            </div>
        </div>
        <div className="text-center mt-3">
            <p className="mb-0"> &copy; {new Date().getFullYear()} your company. Are all righ reserved. </p>
        </div>
    </div>
</footer>



export default Footer;