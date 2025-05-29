//import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

function Navbar() {
    return <>
        <aside className="navbar">
            <nav>
                <ul className="links">
                    <li className="link-items">
                        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>
                            Home
                        </NavLink>
                    </li>
                    <li className="link-items">
                        <NavLink to="/about" className={({isActive}) => isActive ? "active" : ""}>
                            About
                        </NavLink>
                    </li>
                    <li className="link-items">
                        <NavLink to="/dashboard" className={({isActive}) => isActive ? "active" : ""}>
                            Dashboard
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    </>;
}

export default Navbar;