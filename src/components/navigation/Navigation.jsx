import './Navigation.css'

function Navigation() {

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <span className="header-logo-icon"><img src="src/assets/img/djcorner_logo.png" alt="Company logo"/></span>
                <p><span id="header-color-section">DJ</span>Corner</p>
            </div>
            <ul>
                <li><a href="/public" onClick={() => console.log("Home clicked")}>Home</a></li>
                <li><a href="/public" onClick={() => console.log("Dashboard clicked")}>Dashboard</a></li>
                <li><a href="/public" onClick={() => console.log("Logout clicked")}>Logout</a></li>
            </ul>
        </nav>
    )
}

export default Navigation;