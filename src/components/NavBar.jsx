import {Link} from "react-router";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Create</Link>
            </div>
        </div>
    );
};

export default Navbar;