import { Link } from "react-router";

const Navbar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </div>
    );
};

export default Navbar;
