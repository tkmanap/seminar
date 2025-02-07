import {Link} from "react-router";
import '../App.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <Link className='nav__links' to="/">Home</Link>
            <Link className='nav__links' to="/create">Create Post</Link>
        </div>
    );
};

export default Navbar;