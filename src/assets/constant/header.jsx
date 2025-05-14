import './header.css'
import Signup from "../pages/signup/signup.jsx";

function Header() {

    return (
        <header>
            <nav className="navbar">
                <div className="navbar-logo">
                    <span className="header-logo-icon"><img src="src/assets/img/placeholder-logo-icon.png" alt="Company logo"/></span>
                    <p><span id="header-color-section">DJ</span>Corner</p>
                </div>
                <ul>
                    <li><a href="/" onClick={() => console.log("Home clicked")}>Home</a></li>
                    <li><a href="/" onClick={() => console.log("Dashboard clicked")}>Dashboard</a></li>
                    <li><a href="/" onClick={() => console.log("Logout clicked")}>Logout</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header