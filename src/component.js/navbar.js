import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav>
            <Link to='/'>Home </Link>
            <Link to='/Survey'> Payment</Link>
            <Link to='/Records'> Records</Link>
            <Link to= '/overviews'>Overview</Link>
        </nav>
    )
}