import { Link } from "react-router-dom";

export const Navbar = () => {
    return(
        <nav className="nuu">
            <Link to='/'>Soil Acidity </Link>
            <Link to='/product'> Type of Acidity</Link>
            <Link to='/Records'> Sign of Acidity</Link>
            <Link to= '/overviews'>Control Measures</Link>
        </nav>
    )
}