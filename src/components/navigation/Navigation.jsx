import './Navigation.css'
import {NavLink, useNavigate} from "react-router-dom";
import logo from "../../assets/img/djcorner_logo.png"

function Navigation() {

    const navigate = useNavigate();

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <button type="button" className="navbar-logo-button" onClick={() => navigate("/")}><img src={logo} alt="Company logo"/>
                    <span id="header-color-section">DJ</span>Corner</button>
            </div>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink></li>
                <li>
                    <NavLink to="/dashboard">Dashboard</NavLink></li>
                <li>
                    <NavLink to="/">Logout</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;